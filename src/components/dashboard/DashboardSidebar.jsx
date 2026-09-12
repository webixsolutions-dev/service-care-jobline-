import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  FileText,
  Bookmark,
  User,
  Settings,
  LogOut,
  Briefcase,
  PlusCircle,
  Users,
  Building,
} from "lucide-react";
import LogoMark, { Wordmark } from "../Logo/Logo";
import DashboardUserCard from "./DashboardUserCard";
import SidebarNavItem from "./SidebarNavItem";
import { useAuth } from "../../context/AuthContext";
import { paths } from "../../data/navLinks";
import styles from "./DashboardSidebar.module.css";

export default function DashboardSidebar({ onCloseMobile }) {
  const { logout, role } = useAuth();
  const navigate = useNavigate();

  const isEmployer = role === "employer";

  function handleSignOut() {
    logout();
    navigate(paths.signIn || "/sign-in");
    if (onCloseMobile) onCloseMobile();
  }

  const seekerNavItems = [
    { to: "/dashboard/overview", label: "Overview", icon: LayoutDashboard },
    { to: "/dashboard/find-jobs", label: "Find Jobs", icon: Search },
    { to: "/dashboard/applications", label: "My Applications", icon: FileText },
    { to: "/dashboard/saved-jobs", label: "Saved Jobs", icon: Bookmark },
    { to: "/dashboard/profile", label: "My Profile", icon: User },
  ];

  const employerNavItems = [
    { to: "/employer-dashboard/overview", label: "Overview", icon: LayoutDashboard },
    { to: "/employer-dashboard/job-postings", label: "Job Postings", icon: Briefcase },
    { to: "/employer-dashboard/post-a-job", label: "Post a Job", icon: PlusCircle },
    { to: "/employer-dashboard/applicants", label: "Applicants", icon: Users },
    { to: "/employer-dashboard/company-profile", label: "Company Profile", icon: Building },
  ];

  const navItems = isEmployer ? employerNavItems : seekerNavItems;
  const settingsPath = isEmployer ? "/employer-dashboard/settings" : "/dashboard/settings";

  return (
    <aside className={styles.sidebar}>
      {/* Brand Header */}
      <div className={styles.brandHeader}>
        <Link to={paths.home || "/"} className={styles.brandLink} onClick={onCloseMobile}>
          <LogoMark size={36} />
          <Wordmark stacked={false} />
        </Link>
      </div>

      {/* User Card */}
      <div className={styles.userCardWrapper}>
        <DashboardUserCard />
      </div>

      {/* Workspace Nav Group (Only Nav Group) */}
      <div className={styles.navSection}>
        <span className={styles.groupLabel}>WORKSPACE</span>
        <nav className={styles.navList}>
          {navItems.map((item) => (
            <SidebarNavItem
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              onClick={onCloseMobile}
            />
          ))}
        </nav>
      </div>

      {/* Bottom Pinned Settings & Sign Out */}
      <div className={styles.bottomPinned}>
        <SidebarNavItem
          to={settingsPath}
          label="Settings"
          icon={Settings}
          onClick={onCloseMobile}
        />
        <button type="button" className={styles.signOutBtn} onClick={handleSignOut}>
          <LogOut size={18} className={styles.signOutIcon} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
