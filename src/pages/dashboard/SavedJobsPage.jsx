import React from "react";
import { Bookmark, Search } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import SavedJobListItem from "../../components/dashboard/SavedJobListItem";
import Button from "../../components/Button/Button";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./SavedJobsPage.module.css";

export default function SavedJobsPage() {
  const { savedJobs } = useDashboardData();

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="Saved Jobs"
        subtitle="Keep track of open positions you're interested in applying for later."
      />

      {savedJobs.length > 0 ? (
        <div className={styles.list}>
          {savedJobs.map((job) => (
            <SavedJobListItem key={job.id} job={job} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className={styles.emptyState}>
          <div className={styles.emptyIconBox}>
            <Bookmark size={36} />
          </div>
          <h3 className={styles.emptyTitle}>No Saved Jobs Yet</h3>
          <p className={styles.emptyText}>
            You haven't bookmarked any jobs yet. When you find a position you like, click the heart icon on any job card to save it here!
          </p>
          <Button to="/dashboard/find-jobs" variant="solid-teal" size="md">
            <Search size={16} /> Find Jobs
          </Button>
        </div>
      )}
    </div>
  );
}
