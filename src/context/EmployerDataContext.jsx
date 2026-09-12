import React, { createContext, useContext, useState } from "react";
import { mockJobPostings } from "../data/mockJobPostings";
import { mockApplicants } from "../data/mockApplicants";

const EmployerDataContext = createContext(null);

const DEFAULT_COMPANY_PROFILE = {
  name: "Sunnybrook Health Centre",
  logo: null,
  industry: "Healthcare & Social Assistance",
  size: "501-1000 employees",
  website: "https://sunnybrook.ca",
  location: "Toronto, ON",
  description: "Sunnybrook Health Centre is an academic health sciences centre located in Toronto, Ontario. It is the largest trauma centre in Canada.",
};

const STAGE_ORDER = ["New", "Reviewed", "Shortlisted", "Interview", "Offer", "Rejected"];

export function EmployerDataProvider({ children }) {
  const [jobPostings, setJobPostings] = useState(mockJobPostings);
  const [applicants, setApplicants] = useState(mockApplicants);
  const [companyProfile, setCompanyProfile] = useState(DEFAULT_COMPANY_PROFILE);

  // Helper getters
  function getPostingById(id) {
    return jobPostings.find((p) => p.id === id);
  }

  function getApplicantsForPosting(jobId) {
    return applicants.filter((a) => a.jobId === jobId);
  }

  // Job Posting Actions
  function createJobPosting(formData, isDraft = false) {
    const newPosting = {
      id: `jp-${Date.now()}`,
      title: formData.jobTitle || "Untitled Position",
      companyName: formData.companyName || companyProfile.name,
      status: isDraft ? "Draft" : "Active",
      category: formData.category || "Healthcare",
      location: formData.location || "Toronto, ON",
      employmentType: formData.employmentType || "Full-time",
      salaryRange: formData.salaryRange || "Competitive",
      contactEmail: formData.contactEmail || "",
      jobSummary: formData.jobSummary || "",
      postedDate: new Date().toISOString().split("T")[0],
      applicantCount: 0,
    };

    setJobPostings((prev) => [newPosting, ...prev]);
    return newPosting;
  }

  function updateJobPosting(id, formData, isDraft = false) {
    setJobPostings((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            title: formData.jobTitle || p.title,
            companyName: formData.companyName || p.companyName,
            status: isDraft ? "Draft" : p.status === "Draft" ? "Active" : p.status,
            category: formData.category || p.category,
            location: formData.location || p.location,
            employmentType: formData.employmentType || p.employmentType,
            salaryRange: formData.salaryRange || p.salaryRange,
            contactEmail: formData.contactEmail || p.contactEmail,
            jobSummary: formData.jobSummary || p.jobSummary,
          };
        }
        return p;
      })
    );
  }

  function closeJobPosting(id) {
    setJobPostings((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Closed" } : p))
    );
  }

  function deleteJobPosting(id) {
    setJobPostings((prev) => prev.filter((p) => p.id !== id));
    setApplicants((prev) => prev.filter((a) => a.jobId !== id));
  }

  // Applicant Pipeline Actions
  function advanceApplicantStage(applicantId, targetStage = null) {
    setApplicants((prev) =>
      prev.map((app) => {
        if (app.id === applicantId) {
          if (targetStage) {
            return { ...app, stage: targetStage };
          }
          const currentIndex = STAGE_ORDER.indexOf(app.stage);
          if (currentIndex >= 0 && currentIndex < STAGE_ORDER.length - 2) {
            return { ...app, stage: STAGE_ORDER[currentIndex + 1] };
          }
        }
        return app;
      })
    );
  }

  function rejectApplicant(applicantId) {
    setApplicants((prev) =>
      prev.map((app) => (app.id === applicantId ? { ...app, stage: "Rejected" } : app))
    );
  }

  function updateApplicantNotes(applicantId, notes) {
    setApplicants((prev) =>
      prev.map((app) => (app.id === applicantId ? { ...app, recruiterNotes: notes } : app))
    );
  }

  function updateCompanyProfile(updatedProfile) {
    setCompanyProfile((prev) => ({ ...prev, ...updatedProfile }));
  }

  const value = {
    jobPostings,
    applicants,
    companyProfile,
    getPostingById,
    getApplicantsForPosting,
    createJobPosting,
    updateJobPosting,
    closeJobPosting,
    deleteJobPosting,
    advanceApplicantStage,
    rejectApplicant,
    updateApplicantNotes,
    updateCompanyProfile,
  };

  return (
    <EmployerDataContext.Provider value={value}>
      {children}
    </EmployerDataContext.Provider>
  );
}

export function useEmployerData() {
  const context = useContext(EmployerDataContext);
  return context;
}
