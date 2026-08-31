import React, { useState, useMemo } from "react";
import { PlusCircle, Briefcase } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import JobPostingCard from "../../components/employerDashboard/JobPostingCard";
import JobPostingsFilterBar from "../../components/employerDashboard/JobPostingsFilterBar";
import Button from "../../components/Button/Button";
import { useEmployerData } from "../../context/EmployerDataContext";

export default function JobPostingsPage() {
  const { jobPostings } = useEmployerData();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const counts = useMemo(() => {
    return {
      All: jobPostings.length,
      Active: jobPostings.filter((p) => p.status === "Active").length,
      Draft: jobPostings.filter((p) => p.status === "Draft").length,
      Closed: jobPostings.filter((p) => p.status === "Closed").length,
    };
  }, [jobPostings]);

  const filteredPostings = useMemo(() => {
    return jobPostings.filter((posting) => {
      const matchStatus = statusFilter === "All" || posting.status === statusFilter;
      const matchSearch =
        !searchQuery.trim() ||
        posting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        posting.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [jobPostings, statusFilter, searchQuery]);

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Job Postings"
        subtitle="Manage all your active, draft, and closed position listings."
        action={
          <Button to="/employer-dashboard/post-a-job" variant="solid-gold" size="md">
            <PlusCircle size={16} /> Post a Job
          </Button>
        }
      />

      <JobPostingsFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        counts={counts}
      />

      {filteredPostings.length > 0 ? (
        <div>
          {filteredPostings.map((posting) => (
            <JobPostingCard key={posting.id} posting={posting} />
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
          <Briefcase size={36} style={{ color: "var(--color-teal)", marginBottom: "16px" }} />
          <h3 style={{ fontSize: "var(--fs-xl)", fontWeight: "var(--fw-bold)", color: "var(--color-navy)" }}>
            No Job Postings Found
          </h3>
          <p style={{ fontSize: "var(--fs-sm)", color: "var(--color-text-muted)", margin: "8px 0 24px" }}>
            {jobPostings.length === 0
              ? "You haven't posted any jobs yet."
              : `No postings match your filter "${statusFilter}" ${searchQuery ? `or query "${searchQuery}"` : ""}.`}
          </p>
          <Button to="/employer-dashboard/post-a-job" variant="solid-gold" size="md">
            <PlusCircle size={16} /> Post a New Job
          </Button>
        </div>
      )}
    </div>
  );
}
