import React from "react";
import JobCard from "../JobCard/JobCard";
import { mockRecommendedJobs } from "../../data/mockRecommendedJobs";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./RecommendedJobsSection.module.css";

export default function RecommendedJobsSection() {
  const { isJobApplied, isJobSaved, applyToJob, toggleSaveJob } = useDashboardData();

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Recommended Jobs</h2>
          <p className={styles.subtitle}>Jobs selected for your profile and preferences.</p>
        </div>
      </div>

      <div className={styles.grid}>
        {mockRecommendedJobs.map((job) => {
          const applied = isJobApplied(job.id);
          const saved = isJobSaved(job.id);

          return (
            <JobCard
              key={job.id}
              job={job}
              layout="grid"
              isApplied={applied}
              isSaved={saved}
              onApply={() => applyToJob(job)}
              onToggleSave={() => toggleSaveJob(job)}
            />
          );
        })}
      </div>
    </section>
  );
}
