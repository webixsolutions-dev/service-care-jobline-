import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DashboardSidebar.module.css";

export default function SidebarNavItem({ to, icon: Icon, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
      }
      end={to === "/dashboard" || to === "/dashboard/overview"}
    >
      {Icon && <Icon className={styles.navIcon} size={18} />}
      <span className={styles.navLabel}>{label}</span>
    </NavLink>
  );
}
