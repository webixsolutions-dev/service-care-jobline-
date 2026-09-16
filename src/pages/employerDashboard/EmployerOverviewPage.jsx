import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlusCircle, Briefcase } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import EmployerStatCardRow from "../../components/employerDashboard/EmployerStatCardRow";
import JobPostingCard from "../../components/employerDashboard/JobPostingCard";
import ApplicantListItem from "../../components/employerDashboard/ApplicantListItem";
import Button from "../../components/Button/Button";
import { useEmployerData } from "../../context/EmployerDataContext";

export default function EmployerOverviewPage() {
  const { jobPostings, applicants } = useEmployerData();

  const activePostings = jobPostings.filter((p) => p.status === "Active");
  const recentApplicants = applicants.slice(0, 5);

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Overview"
        subtitle="Your hiring activity, applicant pipeline, and active job postings at a glance."
      />

      <EmployerStatCardRow />

      {jobPostings.length === 0 ? (
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
          <Briefcase size={40} style={{ color: "var(--color-teal)", marginBottom: "16px" }} />
          <h3 style={{ fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-navy)" }}>
            No Job Postings Yet
          </h3>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-muted)", margin: "8px 0 24px" }}>
            Reach skilled newcomers and qualified professionals across Canada by publishing your first job opening.
          </p>
          <Button to="/employer-dashboard/post-a-job" variant="solid-gold" size="md">
            <PlusCircle size={16} /> Post Your First Job
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {/* Recent Applicants Section */}
          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-navy)" }}>
                  Recent Applicants
                </h2>
                <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>
                  Latest candidates who applied to your open positions.
                </p>
              </div>
              <Link
                to="/employer-dashboard/applicants"
                style={{
                  fontSize: "var(--fs-xs)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--color-teal-dark)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                View All Applicants <ArrowRight size={14} />
              </Link>
            </div>

            {recentApplicants.length > 0 ? (
              <div>
                {recentApplicants.map((applicant) => (
                  <ApplicantListItem key={applicant.id} applicant={applicant} />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>
                No recent applicants found.
              </p>
            )}
          </section>

          {/* Active Postings Section */}
          <section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2 style={{ fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-navy)" }}>
                  Active Job Postings
                </h2>
                <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>
                  Your current active listings accepting applications.
                </p>
              </div>
              <Link
                to="/employer-dashboard/job-postings"
                style={{
                  fontSize: "var(--fs-xs)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--color-teal-dark)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  textDecoration: "none",
                }}
              >
                View All Postings <ArrowRight size={14} />
              </Link>
            </div>

            {activePostings.length > 0 ? (
              <div>
                {activePostings.slice(0, 3).map((posting) => (
                  <JobPostingCard key={posting.id} posting={posting} />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: "var(--fs-xs)", color: "var(--color-text-muted)" }}>
                No active job postings right now.
              </p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
