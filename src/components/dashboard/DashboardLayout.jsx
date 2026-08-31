import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import LogoMark, { Wordmark } from "../Logo/Logo";
import { paths } from "../../data/navLinks";
import styles from "./DashboardLayout.module.css";

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={styles.layoutContainer}>
      {/* Mobile Slim Header */}
      <header className={styles.mobileHeader}>
        <Link to={paths.home || "/"} className={styles.mobileLogo}>
          <LogoMark size={32} />
          <Wordmark stacked={false} />
        </Link>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Desktop Persistent Sidebar */}
      <div className={styles.desktopSidebarWrapper}>
        <DashboardSidebar />
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawerOverlay} onClick={() => setMobileMenuOpen(false)}>
          <div
            className={styles.mobileDrawerContent}
            onClick={(e) => e.stopPropagation()}
          >
            <DashboardSidebar onCloseMobile={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.contentOutlet}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
