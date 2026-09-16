import React, { createContext, useContext, useState, useMemo } from "react";
import { mockApplications } from "../data/mockApplications";
import { jobsData } from "../data/jobsData";

const DashboardDataContext = createContext(null);

const DEFAULT_PROFILE = {
  fullName: "Alex Rivera",
  email: "alex.rivera@example.com",
  phone: "(416) 555-0182",
  location: "Toronto, ON",
  skills: ["Patient Care", "Vital Signs", "First Aid / CPR", "Customer Service", "Bilingual (English / French)"],
  experience: [
    {
      id: "exp-1",
      title: "Caregiver Assistant",
      company: "Community Support Network",
      dates: "2024 – 2026",
      description: "Assisted seniors with daily living activities, mobility, and medication reminders.",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Humber College",
      program: "Personal Support Worker Certificate",
      dates: "2023 – 2024",
    },
  ],
};

// Initial saved jobs seed (e.g. 2 saved jobs)
const INITIAL_SAVED_JOBS = jobsData.slice(1, 3);

export function DashboardDataProvider({ children }) {
  const [applications, setApplications] = useState(mockApplications);
  const [savedJobs, setSavedJobs] = useState(INITIAL_SAVED_JOBS);
  const [profile, setProfile] = useState(DEFAULT_PROFILE);

  // Helper check functions
  function isJobApplied(jobId) {
    return applications.some((app) => app.jobId === jobId || app.id === jobId);
  }

  function isJobSaved(jobId) {
    return savedJobs.some((job) => job.id === jobId);
  }

  // Action functions
  function applyToJob(job) {
    const jobId = job.id;
    if (isJobApplied(jobId)) return;

    const newApp = {
      id: `app-${Date.now()}`,
      jobId: jobId,
      title: job.title,
      company: job.company,
      location: job.location,
      jobType: job.jobType || "Full-time",
      category: job.category || "General",
      salary: job.salary || "Competitive",
      status: "Applied",
      dateApplied: new Date().toISOString().split("T")[0],
      lastUpdated: "Just now",
      notes: "Application submitted via Newcomer Jobline.",
    };

    setApplications((prev) => [newApp, ...prev]);
  }

  function withdrawApplication(applicationId) {
    setApplications((prev) => prev.filter((app) => app.id !== applicationId && app.jobId !== applicationId));
  }

  function toggleSaveJob(job) {
    setSavedJobs((prev) => {
      const exists = prev.some((j) => j.id === job.id);
      if (exists) {
        return prev.filter((j) => j.id !== job.id);
      } else {
        return [job, ...prev];
      }
    });
  }

  function updateProfile(updatedFields) {
    setProfile((prev) => ({ ...prev, ...updatedFields }));
  }

  // Calculate profile completeness percentage based on the simplified field set
  const profileCompleteness = useMemo(() => {
    let fieldsCount = 0;
    let filledCount = 0;

    // Core fields
    const core = ["fullName", "email", "phone", "location"];
    core.forEach((f) => {
      fieldsCount++;
      if (profile[f] && String(profile[f]).trim().length > 0) filledCount++;
    });

    // Skills
    fieldsCount++;
    if (Array.isArray(profile.skills) && profile.skills.length > 0) filledCount++;

    // Work Experience (Optional but adds to % score)
    fieldsCount++;
    if (Array.isArray(profile.experience) && profile.experience.length > 0) filledCount++;

    // Education (Optional but adds to % score)
    fieldsCount++;
    if (Array.isArray(profile.education) && profile.education.length > 0) filledCount++;

    return Math.round((filledCount / fieldsCount) * 100);
  }, [profile]);

  const value = {
    applications,
    savedJobs,
    profile,
    profileCompleteness,
    isJobApplied,
    isJobSaved,
    applyToJob,
    withdrawApplication,
    toggleSaveJob,
    updateProfile,
  };

  return (
    <DashboardDataContext.Provider value={value}>
      {children}
    </DashboardDataContext.Provider>
  );
}

export function useDashboardData() {
  const context = useContext(DashboardDataContext);
  return context;
}

