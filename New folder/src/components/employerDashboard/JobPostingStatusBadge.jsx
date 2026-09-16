import React from "react";

const badgeStyles = {
  Active: {
    bg: "var(--color-teal)",
    color: "#ffffff",
    border: "transparent",
  },
  Draft: {
    bg: "rgba(100, 116, 139, 0.14)",
    color: "#64748b",
    border: "1px solid rgba(100, 116, 139, 0.25)",
  },
  Closed: {
    bg: "rgba(10, 27, 51, 0.06)",
    color: "var(--color-navy)",
    border: "1px solid var(--color-navy)",
  },
};

export default function JobPostingStatusBadge({ status = "Active" }) {
  const style = badgeStyles[status] || badgeStyles.Active;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: "600",
        backgroundColor: style.bg,
        color: style.color,
        border: style.border,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}
