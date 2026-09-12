import React from "react";

const statusStyles = {
  Applied: {
    bg: "var(--color-teal-soft)",
    color: "var(--color-teal-dark)",
    border: "rgba(20, 184, 166, 0.3)",
  },
  "In Review": {
    bg: "var(--color-gold-soft)",
    color: "var(--color-gold-dark)",
    border: "rgba(245, 166, 35, 0.3)",
  },
  Interview: {
    bg: "var(--color-teal)",
    color: "#ffffff",
    border: "transparent",
  },
  Offer: {
    bg: "rgba(34, 197, 94, 0.15)",
    color: "#15803d",
    border: "rgba(34, 197, 94, 0.3)",
  },
  "Not Selected": {
    bg: "rgba(100, 116, 139, 0.12)",
    color: "#64748b",
    border: "rgba(100, 116, 139, 0.2)",
  },
};

export default function ApplicationStatusBadge({ status = "Applied" }) {
  const style = statusStyles[status] || statusStyles.Applied;

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
        border: `1px solid ${style.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}
