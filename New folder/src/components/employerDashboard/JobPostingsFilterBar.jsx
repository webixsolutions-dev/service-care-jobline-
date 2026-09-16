import React from "react";
import { Search, Filter } from "lucide-react";
import styles from "./JobPostingsFilterBar.module.css";

export default function JobPostingsFilterBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusChange,
  counts = {},
}) {
  const statuses = ["All", "Active", "Draft", "Closed"];

  return (
    <div className={styles.bar}>
      {/* Search Input */}
      <div className={styles.searchBox}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by job title or location..."
          className={styles.searchInput}
        />
      </div>

      {/* Status Filter Pills */}
      <div className={styles.statusGroup}>
        <span className={styles.label}>
          <Filter size={14} /> Status:
        </span>
        {statuses.map((status) => (
          <button
            key={status}
            type="button"
            className={`${styles.pill} ${statusFilter === status ? styles.activePill : ""}`}
            onClick={() => onStatusChange(status)}
          >
            {status} {counts[status] !== undefined ? `(${counts[status]})` : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
