import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Filter, SlidersHorizontal, Search, FileText } from "lucide-react";
import DashboardTopBanner from "../../components/dashboard/DashboardTopBanner";
import ApplicationListItem from "../../components/dashboard/ApplicationListItem";
import Button from "../../components/Button/Button";
import { useDashboardData } from "../../context/DashboardDataContext";
import styles from "./MyApplicationsPage.module.css";

export default function MyApplicationsPage() {
  const { applications } = useDashboardData();
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredApplications = useMemo(() => {
    let list = [...applications];

    if (statusFilter !== "All") {
      list = list.filter((app) => app.status === statusFilter);
    }

    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.dateApplied || 0) - new Date(a.dateApplied || 0));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => new Date(a.dateApplied || 0) - new Date(b.dateApplied || 0));
    }

    return list;
  }, [applications, statusFilter, sortBy]);

  const statusOptions = ["All", "Applied", "In Review", "Interview", "Offer", "Not Selected"];

  return (
    <div>
      <DashboardTopBanner
        eyebrow="Newcomer Jobline Dashboard"
        title="My Applications"
        subtitle="Track the real-time status of every job application you've submitted."
      />

      {applications.length > 0 ? (
        <>
          {/* Filter & Sort Controls */}
          <div className={styles.controlsRow}>
            <div className={styles.filterPills}>
              <span className={styles.controlLabel}>
                <Filter size={14} /> Filter Status:
              </span>
              {statusOptions.map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`${styles.pill} ${statusFilter === st ? styles.activePill : ""}`}
                  onClick={() => setStatusFilter(st)}
                >
                  {st}
                  {st === "All"
                    ? ` (${applications.length})`
                    : ` (${applications.filter((a) => a.status === st).length})`}
                </button>
              ))}
            </div>

            <div className={styles.sortGroup}>
              <span className={styles.controlLabel}>
                <SlidersHorizontal size={14} /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
                aria-label="Sort applications"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Applications List */}
          {filteredApplications.length > 0 ? (
            <div className={styles.list}>
              {filteredApplications.map((app) => (
                <ApplicationListItem key={app.id} application={app} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyFilterState}>
              <p>No applications match status "{statusFilter}".</p>
              <button
                type="button"
                className={styles.resetFilterBtn}
                onClick={() => setStatusFilter("All")}
              >
                Clear Status Filter
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className={styles.emptyState}>
          <div className={styles.emptyIconBox}>
            <FileText size={36} />
          </div>
          <h3 className={styles.emptyTitle}>No Applications Yet</h3>
          <p className={styles.emptyText}>
            You haven't submitted any job applications yet. Start exploring verified positions across Canada!
          </p>
          <Button to="/dashboard/find-jobs" variant="solid-teal" size="md">
            <Search size={16} /> Browse Jobs
          </Button>
        </div>
      )}
    </div>
  );
}
