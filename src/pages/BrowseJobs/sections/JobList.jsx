import React from "react";
import JobCard from "../../../components/JobCard/JobCard";
import { useDashboardData } from "../../../context/DashboardDataContext";
import styles from "./JobList.module.css";

export default function JobList({ jobs, layout = "list", showSalary = true }) {
  const dashboard = useDashboardData();

  if (!jobs.length) {
    return <p className={styles.empty}>No jobs match your current filters.</p>;
  }

  return (
    <div className={layout === "grid" ? styles.grid : styles.stack}>
      {jobs.map((job) => {
        const isApplied = dashboard ? dashboard.isJobApplied(job.id) : false;
        const isSaved = dashboard ? dashboard.isJobSaved(job.id) : undefined;
        const onApply = dashboard ? () => dashboard.applyToJob(job) : undefined;
        const onToggleSave = dashboard ? () => dashboard.toggleSaveJob(job) : undefined;

        return (
          <JobCard
            key={job.id}
            job={job}
            layout={layout}
            showSalary={showSalary}
            isApplied={isApplied}
            isSaved={isSaved}
            onApply={onApply}
            onToggleSave={onToggleSave}
          />
        );
      })}
    </div>
  );
}
