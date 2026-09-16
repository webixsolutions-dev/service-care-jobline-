import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useAuth } from "./AuthContext";
import { createEmployerJob, getApplicationResumeUrl, getRecruiterApplications, getRecruiterDashboard, normalizeJob, updateApplicationStatus, updateEmployerJob } from "../lib/jobs";

const EmployerDataContext = createContext(null);
const API_TO_UI = { submitted: "New", viewed: "Reviewed", shortlisted: "Shortlisted", interviewing: "Interview", offered: "Offer", hired: "Hired", rejected: "Rejected", withdrawn: "Withdrawn" };
const UI_TO_API = Object.fromEntries(Object.entries(API_TO_UI).map(([key, value]) => [value, key]));
const NEXT = { submitted: "viewed", viewed: "shortlisted", shortlisted: "interviewing", interviewing: "offered", offered: "hired" };

function mapPosting(raw) {
  const job = normalizeJob(raw);
  return { ...raw, ...job, id: String(raw.id), companyName: job.company, status: raw.status === "active" ? "Active" : raw.status === "draft" ? "Draft" : raw.status === "pending_review" ? "Pending Review" : "Closed", category: raw.category_id ? String(raw.category_id) : "", employmentType: raw.employment_type || "", salaryRange: job.salary, contactEmail: "", jobSummary: raw.description || "", postedDate: raw.published_at || raw.created_at };
}

function mapApplicant(raw) {
  const person = raw.profiles || raw.profile || {};
  const job = raw.jobs || {};
  const dateLabel = (item) => [item?.startDate, item?.endDate || (item?.current ? "Present" : "")].filter(Boolean).join(" – ");
  return { ...raw, id: String(raw.id), jobId: String(raw.job_id || job.id || ""), candidateName: person.full_name || "Candidate", jobTitle: job.title || "Job posting", stage: API_TO_UI[raw.status] || raw.status || "New", appliedDate: raw.created_at || raw.updated_at, email: person.email || "Not shared", phone: person.phone || "", location: [person.location_city, person.location_province].filter(Boolean).join(", ") || "Canada", resumeFilename: raw.resume_path ? "Candidate resume.pdf" : "", skills: Array.isArray(person.skills) ? person.skills : [], experience: (Array.isArray(person.experience) ? person.experience : []).map((item, index) => ({ ...item, id: item.id || `exp-${index}`, dates: item.dates || dateLabel(item) })), education: (Array.isArray(person.education) ? person.education : []).map((item, index) => ({ ...item, id: item.id || `edu-${index}`, program: item.program || item.degree || item.field || "Education", dates: item.dates || dateLabel(item) })) };
}

function postingPayload(values, status) {
  const [city = "", province = ""] = String(values.location || "").split(",").map((part) => part.trim());
  const salary = String(values.salaryRange || "").match(/\d[\d,]*/g)?.map((part) => Number(part.replaceAll(",", ""))) || [];
  return { title: values.jobTitle || values.title, category_id: Number(values.category), city: city || null, province: province || null, workplace_type: values.workplaceType || "onsite", is_remote: values.workplaceType === "remote", experience_level: values.experienceLevel || "mid_level", salary_min: salary[0] || null, salary_max: salary[1] || salary[0] || null, salary_currency: "CAD", salary_period: "yearly", employment_type: String(values.employmentType || "full_time").replaceAll("-", "_"), skills: values.skills || [], description: values.jobSummary || values.description, ...(String(status).toLowerCase() === "closed" ? { status: "closed" } : {}) };
}

export function EmployerDataProvider({ children }) {
  const { token, backendRole } = useAuth();
  const [jobPostings, setJobPostings] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [companyProfile, setCompanyProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    if (!token || backendRole !== "recruiter") { setLoading(false); return; }
    setLoading(true); setError("");
    try {
      const [dashboard, applications] = await Promise.all([getRecruiterDashboard(token), getRecruiterApplications(token, { pageSize: 100 })]);
      setJobPostings((dashboard?.jobs || []).map(mapPosting));
      setApplicants((applications?.items || []).map(mapApplicant));
      const company = dashboard?.companies?.[0] || null;
      setCompanyProfile(company ? { ...company, location: [company.city, company.province].filter(Boolean).join(", "), logo: company.logo_path || "" } : null);
    } catch (err) { setError(err?.message || "Unable to load recruiter dashboard."); }
    finally { setLoading(false); }
  }, [token, backendRole]);
  useEffect(() => { queueMicrotask(reload); }, [reload]);

  const getPostingById = useCallback((id) => jobPostings.find((item) => item.id === String(id)), [jobPostings]);
  const getApplicantsForPosting = useCallback((id) => applicants.filter((item) => item.jobId === String(id)), [applicants]);
  const createJobPosting = useCallback(async (values) => { const result = await createEmployerJob(postingPayload(values), token); await reload(); return result; }, [token, reload]);
  const updateJobPosting = useCallback(async (id, values) => { const result = await updateEmployerJob(id, postingPayload(values), token); await reload(); return result; }, [token, reload]);
  const closeJobPosting = useCallback(async (id) => { await updateEmployerJob(id, { status: "closed" }, token); await reload(); }, [token, reload]);
  const setStage = useCallback(async (id, status) => {
    const result = await updateApplicationStatus(id, status, token);
    setApplicants((items) => items.map((item) => item.id === String(id)
      ? { ...item, ...result, id: item.id, jobId: item.jobId, candidateName: item.candidateName, jobTitle: item.jobTitle, stage: API_TO_UI[result?.status] || result?.status || item.stage }
      : item));
    return result;
  }, [token]);
  const advanceApplicantStage = useCallback(async (id, target = null) => { const applicant = applicants.find((item) => item.id === String(id)); const current = UI_TO_API[applicant?.stage]; const status = target ? (UI_TO_API[target] || target) : NEXT[current]; if (!status) return null; return setStage(id, status); }, [applicants, setStage]);
  const rejectApplicant = useCallback((id) => setStage(id, "rejected"), [setStage]);
  const viewApplicantResume = useCallback(async (id) => { const data = await getApplicationResumeUrl(id, token); const url = data?.url || data?.signedUrl || data?.signed_url; if (!url) throw new Error("This candidate has not uploaded a resume."); window.open(url, "_blank", "noopener,noreferrer"); return url; }, [token]);
  const stats = useMemo(() => ({ activeJobs: jobPostings.filter((item) => item.status === "Active").length, applicants: applicants.length, interviews: applicants.filter((item) => item.stage === "Interview").length, hires: applicants.filter((item) => item.stage === "Hired").length }), [jobPostings, applicants]);
  const value = useMemo(() => ({ jobPostings, applicants, companyProfile, stats, loading, error, reload, getPostingById, getApplicantsForPosting, createJobPosting, updateJobPosting, closeJobPosting, advanceApplicantStage, rejectApplicant, viewApplicantResume }), [jobPostings, applicants, companyProfile, stats, loading, error, reload, getPostingById, getApplicantsForPosting, createJobPosting, updateJobPosting, closeJobPosting, advanceApplicantStage, rejectApplicant, viewApplicantResume]);
  if (backendRole === "recruiter" && loading) return <LoadingSpinner label="Loading recruiter dashboard" full />;
  return <EmployerDataContext.Provider value={value}>{children}</EmployerDataContext.Provider>;
}

export function useEmployerData() { const context = useContext(EmployerDataContext); if (!context) throw new Error("useEmployerData must be used inside EmployerDataProvider"); return context; }
