import React from "react";

const statusConfig = {
  done: {
    label: "Done",
    dot: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    color: "#34d399",
    border: "rgba(16,185,129,0.25)",
  },
  started: {
    label: "In Progress",
    dot: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    color: "#fbbf24",
    border: "rgba(245,158,11,0.25)",
  },
  "not started": {
    label: "Not Started",
    dot: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
    color: "#a78bfa",
    border: "rgba(139,92,246,0.25)",
  },
};

const StatusDisplay = ({ status }) => {
  const cfg = statusConfig[status?.toLowerCase()] ?? {
    label: status,
    dot: "#6b7280",
    bg: "rgba(107,114,128,0.12)",
    color: "#9ca3af",
    border: "rgba(107,114,128,0.25)",
  };

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: 20,
      padding: "4px 10px",
      fontSize: "0.7rem",
      fontWeight: 700,
      whiteSpace: "nowrap",
      letterSpacing: "0.02em",
      background: cfg.bg,
      color: cfg.color,
      border: `1px solid ${cfg.border}`,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: cfg.dot,
        boxShadow: `0 0 6px ${cfg.dot}`,
        flexShrink: 0,
      }} />
      {cfg.label}
    </span>
  );
};

export default StatusDisplay;
