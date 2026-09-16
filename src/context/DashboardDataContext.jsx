import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useAuth } from "./AuthContext";
import { applyToJob as applyRequest, getRecommendedJobs, getSeekerDashboard, normalizeJob, saveJob, unsaveJob, updateMyProfile } from "../lib/jobs";

const DashboardDataContext = createContext(null);
const STATUS = { submitted: "Applied", viewed: "In Review", shortlisted: "In Review", interviewing: "Interview", offered: "Offer", hired: "Hired", rejected: "Not Selected", withdrawn: "Withdrawn" };

function mapProfile(row, user) {
  const dateLabel = (item) => item?.dates || [item?.startDate, item?.endDate || (item?.current ? "Present" : "")].filter(Boolean).join(" – ");
  return {
    fullName: row?.full_name || user?.full_name || user?.name || "",
    email: user?.email || "",
    phone: row?.phone || "",
    location: [row?.location_city, row?.location_province].filter(Boolean).join(", "),
    skills: Array.isArray(row?.skills) ? row.skills : [],
    experience: (Array.isArray(row?.experience) ? row.experience : []).map((item, index) => ({ ...item, id: item.id || `exp-${index}`, dates: dateLabel(item) })),
    education: (Array.isArray(row?.education) ? row.education : []).map((item, index) => ({ ...item, id: item.id || `edu-${index}`, program: item.program || item.degree || item.field || "", dates: dateLabel(item) })),
  };
}

function mapApplication(item) {
  const rawJob = item?.jobs || {};
  const job = rawJob.jobType ? rawJob : normalizeJob(rawJob);
  return { ...item, id: String(item.id), jobId: String(item.job_id || job.id || ""), title: job.title, company: job.company, location: job.location, status: STATUS[item.status] || item.status || "Applied", dateApplied: item.created_at || item.updated_at, notes: item.cover_letter ? "Cover letter included" : "" };
}

export function DashboardDataProvider({ children }) {
  const { token, backendRole, currentUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [profile, setProfile] = useState(() => mapProfile(null, currentUser));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    if (!token || backendRole !== "job_seeker") { setLoading(false); return; }
    setLoading(true); setError("");
    try {
      const [dashboard, recommended] = await Promise.all([getSeekerDashboard(token), getRecommendedJobs(token, 6)]);
      setApplications((dashboard?.applications || []).map(mapApplication));
      setSavedJobs((dashboard?.savedJobs || []).map((item) => normalizeJob(item.jobs || item)).filter(Boolean));
      setRecommendedJobs((recommended?.items || recommended || []).map((item) => normalizeJob(item.jobs || item)).filter(Boolean));
      setProfile(mapProfile(dashboard?.profile, currentUser));
    } catch (err) { setError(err?.message || "Unable to load your dashboard."); }
    finally { setLoading(false); }
  }, [token, backendRole, currentUser]);

  useEffect(() => { queueMicrotask(reload); }, [reload]);
  const isJobApplied = useCallback((id) => applications.some((item) => item.jobId === String(id)), [applications]);
  const isJobSaved = useCallback((id) => savedJobs.some((item) => String(item.id) === String(id)), [savedJobs]);
  const applyToJob = useCallback(async (job, coverLetter = "") => {
    if (isJobApplied(job.id)) return null;
    const result = await applyRequest(job.id, token, coverLetter);
    setApplications((items) => [mapApplication({ ...(result?.application || result), jobs: job }), ...items]);
    return result;
  }, [isJobApplied, token]);
  const toggleSaveJob = useCallback(async (job) => {
    const exists = isJobSaved(job.id);
    if (exists) await unsaveJob(job.id, token); else await saveJob(job.id, token);
    setSavedJobs((items) => exists ? items.filter((item) => String(item.id) !== String(job.id)) : [normalizeJob(job), ...items]);
    return !exists;
  }, [isJobSaved, token]);
  const updateProfile = useCallback(async (next) => {
    const [city = "", province = ""] = String(next.location || "").split(",").map((part) => part.trim());
    const experience = (next.experience || []).map((item) => ({ title: item.title, company: item.company, startDate: item.startDate || null, endDate: item.endDate || null, current: Boolean(item.current), description: item.description || (item.dates ? `Dates: ${item.dates}` : null) }));
    const education = (next.education || []).map((item) => ({ degree: item.degree || item.program || item.field || "Education", institution: item.institution, startDate: item.startDate || null, endDate: item.endDate || null, current: Boolean(item.current), field: item.field || item.program || null }));
    const row = await updateMyProfile({ full_name: next.fullName, phone: next.phone || null, location_city: city || null, location_province: province || null, skills: next.skills || [], experience, education }, token);
    const mapped = mapProfile(row, currentUser); setProfile(mapped); return mapped;
  }, [token, currentUser]);
  const profileCompleteness = useMemo(() => { const fields = [profile.fullName, profile.email, profile.phone, profile.location, profile.skills?.length, profile.experience?.length, profile.education?.length]; return Math.round((fields.filter(Boolean).length / fields.length) * 100); }, [profile]);
  const value = useMemo(() => ({ applications, savedJobs, recommendedJobs, profile, profileCompleteness, loading, error, reload, isJobApplied, isJobSaved, applyToJob, toggleSaveJob, updateProfile }), [applications, savedJobs, recommendedJobs, profile, profileCompleteness, loading, error, reload, isJobApplied, isJobSaved, applyToJob, toggleSaveJob, updateProfile]);
  if (backendRole === "job_seeker" && loading) return <LoadingSpinner label="Loading your dashboard" full />;
  return <DashboardDataContext.Provider value={value}>{children}</DashboardDataContext.Provider>;
}

export function useDashboardData() { const context = useContext(DashboardDataContext); if (!context) throw new Error("useDashboardData must be used inside DashboardDataProvider"); return context; }
