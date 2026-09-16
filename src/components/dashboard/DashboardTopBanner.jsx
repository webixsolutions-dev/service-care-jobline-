import React from "react";
import styles from "./DashboardTopBanner.module.css";

export default function DashboardTopBanner({
  eyebrow = "Newcomer Jobline Dashboard",
  title,
  subtitle,
  action,
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}
