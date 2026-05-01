import React from "react";

const STATUS = {
  done: {
    label: "Done",
    color: "#34d399",
    bg: "rgba(16,185,129,0.1)",
    border: "rgba(16,185,129,0.25)",
    dot: "#10b981",
  },
  started: {
    label: "In Progress",
    color: "#fbbf24",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    dot: "#f59e0b",
  },
  "not started": {
    label: "Not Started",
    color: "#93c5fd",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    dot: "#3b82f6",
  },
};

const StatusDisplay = ({ status }) => {
  const s = STATUS[status?.toLowerCase()] ?? {
    label: status ?? "Unknown",
    color: "#94a3b8",
    bg: "rgba(148,163,184,0.1)",
    border: "rgba(148,163,184,0.2)",
    dot: "#64748b",
  };

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 10px",
      borderRadius: 6,
      fontSize: "0.7rem",
      fontWeight: 600,
      whiteSpace: "nowrap",
      letterSpacing: "0.02em",
      background: s.bg,
      color: s.color,
      border: `1px solid ${s.border}`,
    }}>
      <span style={{
        width: 6, height: 6,
        borderRadius: "50%",
        background: s.dot,
        flexShrink: 0,
      }} />
      {s.label}
    </span>
  );
};

export default StatusDisplay;
