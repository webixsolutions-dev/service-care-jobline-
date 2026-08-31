import React from "react";
import { MapPin, BookmarkX, CheckCircle, ArrowRight, Building } from "lucide-react";
import Button from "../Button/Button";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./SavedJobListItem.module.css";

export default function SavedJobListItem({ job }) {
  const { toggleSaveJob, applyToJob, isJobApplied } = useDashboardData();
  const applied = isJobApplied(job.id);

  function handleApply() {
    applyToJob(job);
  }

  function handleRemove() {
    toggleSaveJob(job);
  }

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.iconBox}>
          <Building size={22} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{job.title}</h3>
          <span className={styles.company}>{job.company}</span>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <MapPin size={14} /> {job.location}
            </span>
            {job.salary && (
              <span className={styles.salaryTag}>{job.salary}</span>
            )}
            {job.jobType && (
              <span className={styles.jobTypeTag}>{job.jobType}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.removeBtn}
          onClick={handleRemove}
          title="Remove from saved jobs"
        >
          <BookmarkX size={16} />
          <span>Remove</span>
        </button>

        {applied ? (
          <span className={styles.appliedBadge}>
            <CheckCircle size={16} /> Applied ✓
          </span>
        ) : (
          <Button variant="solid-teal" size="sm" onClick={handleApply}>
            Apply Now <ArrowRight size={14} />
          </Button>
        )}
      </div>
    </div>
  );
}
