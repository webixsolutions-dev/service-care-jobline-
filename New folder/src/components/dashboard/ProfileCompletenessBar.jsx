import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./ProfileCompletenessBar.module.css";

export default function ProfileCompletenessBar({ showCta = true }) {
  const { profileCompleteness } = useDashboardData();
  const isComplete = profileCompleteness >= 100;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <CheckCircle2
            size={20}
            className={isComplete ? styles.iconComplete : styles.iconIncomplete}
          />
          <span className={styles.label}>Profile Completeness</span>
          <span className={styles.percentage}>{profileCompleteness}%</span>
        </div>
        {showCta && !isComplete && (
          <Link to="/dashboard/profile" className={styles.ctaLink}>
            <span>Complete your profile</span>
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${profileCompleteness}%` }}
        />
      </div>
    </div>
  );
}
