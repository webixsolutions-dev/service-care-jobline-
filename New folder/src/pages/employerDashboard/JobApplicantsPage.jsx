import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import ApplicantListItem from "../../components/employerDashboard/ApplicantListItem";
import { useEmployerData } from "../../context/EmployerDataContext";

export default function JobApplicantsPage() {
  const { jobId } = useParams();
  const { getPostingById, getApplicantsForPosting } = useEmployerData();

  const posting = getPostingById(jobId);
  const applicants = getApplicantsForPosting(jobId);

  const jobTitle = posting?.title || "Job Position";

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title={`Applicants — ${jobTitle}`}
        subtitle={`Reviewing candidate applications for ${jobTitle} at ${posting?.companyName || "your organization"}.`}
        action={
          <Link
            to="/employer-dashboard/job-postings"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "var(--fs-xs)",
              fontWeight: "var(--fw-semibold)",
              color: "var(--color-white)",
              background: "rgba(255, 255, 255, 0.15)",
              padding: "8px 16px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}
          >
            <ArrowLeft size={16} /> Back to Job Postings
          </Link>
        }
      />

      {applicants.length > 0 ? (
        <div>
          <div
            style={{
              fontSize: "var(--fs-xs)",
              fontWeight: "var(--fw-bold)",
              color: "var(--color-navy)",
              marginBottom: "16px",
            }}
          >
            Showing {applicants.length} applicant{applicants.length !== 1 ? "s" : ""}
          </div>
          {applicants.map((applicant) => (
            <ApplicantListItem key={applicant.id} applicant={applicant} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            background: "var(--color-white)",
            border: "1px solid var(--color-border-light)",
            borderRadius: "var(--radius-lg)",
            padding: "56px 24px",
            textAlign: "center",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <Users size={36} style={{ color: "var(--color-teal)", marginBottom: "16px" }} />
          <h3 style={{ fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-navy)" }}>
            No Applicants Yet
          </h3>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-muted)", margin: "8px 0 0" }}>
            No candidate applications have been received for "{jobTitle}" yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
