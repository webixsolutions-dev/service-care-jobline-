import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useEmployerData } from "../../context/EmployerDataContext";
import styles from "./DashboardSidebar.module.css";

export default function DashboardUserCard() {
  const { currentUser, role } = useAuth();
  const employerData = useEmployerData();

  const isEmployer = role === "employer";
  const name = isEmployer
    ? employerData?.companyProfile?.name || currentUser?.name || "Sunnybrook Health"
    : currentUser?.name || "Job Seeker";
  const roleLabel = isEmployer ? "Employer / Recruiter" : "Job Seeker";
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className={styles.userCard}>
      <div className={`${styles.avatar} ${isEmployer ? styles.avatarEmployer : ""}`}>
        {initial}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.userName} title={name}>
          {name}
        </span>
        <span className={`${styles.userRole} ${isEmployer ? styles.userRoleEmployer : ""}`}>
          {roleLabel}
        </span>
      </div>
    </div>
  );
}
