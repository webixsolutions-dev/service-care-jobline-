import React from "react";
import { Briefcase, Users, Calendar, CheckCircle2 } from "lucide-react";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "../dashboard/StatCardRow.module.css";

export default function EmployerStatCardRow() {
  const { jobPostings, applicants } = useEmployerData();

  const activePostings = jobPostings.filter((p) => p.status === "Active").length;
  const totalApplicants = applicants.length;
  const interviewsCount = applicants.filter((a) => a.stage === "Interview").length;
  const offersCount = applicants.filter((a) => a.stage === "Offer").length;

  const stats = [
    {
      id: "activePostings",
      label: "Active Job Postings",
      count: activePostings,
      icon: Briefcase,
      tone: "navy",
    },
    {
      id: "totalApplicants",
      label: "Total Applicants",
      count: totalApplicants,
      icon: Users,
      tone: "teal",
    },
    {
      id: "interviews",
      label: "Interviews Scheduled",
      count: interviewsCount,
      icon: Calendar,
      tone: "gold",
    },
    {
      id: "positionsFilled",
      label: "Positions Filled / Offers",
      count: offersCount,
      icon: CheckCircle2,
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
