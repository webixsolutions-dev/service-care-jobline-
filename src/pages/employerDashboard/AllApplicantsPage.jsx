import React, { useState, useMemo } from "react";
import { Search, Filter, Users } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import ApplicantListItem from "../../components/employerDashboard/ApplicantListItem";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./AllApplicantsPage.module.css";

const STAGE_OPTIONS = ["All", "New", "Reviewed", "Shortlisted", "Interview", "Offer", "Rejected"];

export default function AllApplicantsPage() {
  const { applicants, jobPostings } = useEmployerData();

  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState("All");
  const [jobIdFilter, setJobIdFilter] = useState("All");

  const filteredApplicants = useMemo(() => {
    return applicants.filter((applicant) => {
      const matchStage = stageFilter === "All" || applicant.stage === stageFilter;
      const matchJob = jobIdFilter === "All" || applicant.jobId === jobIdFilter;
      const matchSearch =
        !searchQuery.trim() ||
        applicant.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        applicant.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        applicant.email.toLowerCase().includes(searchQuery.toLowerCase());

      return matchStage && matchJob && matchSearch;
    });
  }, [applicants, stageFilter, jobIdFilter, searchQuery]);

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="All Applicants"
        subtitle="Manage and track candidate applications across all your active and past job postings."
      />

      {/* Filter Bar */}
      <div className={styles.controlsRow}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidate name, role, or email..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.dropdownGroup}>
          <span className={styles.label}>Job Posting:</span>
          <select
            value={jobIdFilter}
            onChange={(e) => setJobIdFilter(e.target.value)}
            className={styles.select}
          >
            <option value="All">All Postings ({jobPostings.length})</option>
            {jobPostings.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pipeline Stage Filter Pills */}
      <div className={styles.stagePillsRow}>
        <span className={styles.label}>
          <Filter size={14} /> Pipeline Stage:
        </span>
        {STAGE_OPTIONS.map((st) => {
          const count =
            st === "All" ? applicants.length : applicants.filter((a) => a.stage === st).length;

          return (
            <button
              key={st}
              type="button"
              className={`${styles.pill} ${stageFilter === st ? styles.activePill : ""}`}
              onClick={() => setStageFilter(st)}
            >
              {st} ({count})
            </button>
          );
        })}
      </div>

      {/* Applicants List */}
      {filteredApplicants.length > 0 ? (
        <div className={styles.list}>
          {filteredApplicants.map((applicant) => (
            <ApplicantListItem key={applicant.id} applicant={applicant} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className={styles.emptyState}>
          <div className={styles.emptyIconBox}>
            <Users size={36} />
          </div>
          <h3 className={styles.emptyTitle}>No Applicants Found</h3>
          <p className={styles.emptyText}>
            {applicants.length === 0
              ? "You haven't received any candidate applications yet."
              : `No applicants match stage "${stageFilter}" ${searchQuery ? `or query "${searchQuery}"` : ""}.`}
          </p>
        </div>
      )}
    </div>
  );
}
