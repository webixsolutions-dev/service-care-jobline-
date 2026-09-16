import React from "react";
import { FileText, Bookmark, Calendar, Award } from "lucide-react";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./StatCardRow.module.css";

export default function StatCardRow() {
  const { applications, savedJobs } = useDashboardData();

  const totalApplications = applications.length;
  const totalSaved = savedJobs.length;
  const totalInterviews = applications.filter((a) => a.status === "Interview").length;
  const totalOffers = applications.filter((a) => a.status === "Offer").length;

  const stats = [
    {
      id: "applications",
      label: "Applications",
      count: totalApplications,
      icon: FileText,
      tone: "navy",
    },
    {
      id: "saved",
      label: "Saved Jobs",
      count: totalSaved,
      icon: Bookmark,
      tone: "teal",
    },
    {
      id: "interviews",
      label: "Interviews",
      count: totalInterviews,
      icon: Calendar,
      tone: "gold",
    },
    {
      id: "offers",
      label: "Job Offers",
      count: totalOffers,
      icon: Award,
      tone: "green",
    },
  ];

  return (
    <div className={styles.row}>
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div key={stat.id} className={`${styles.card} ${styles[stat.tone]}`}>
            <div className={styles.iconBox}>
              <IconComponent size={22} />
            </div>
            <div className={styles.info}>
              <span className={styles.count}>{stat.count}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
