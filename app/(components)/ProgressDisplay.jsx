import React from "react";

const ProgressDisplay = ({ progress }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        flex: 1,
        height: 4,
        borderRadius: 4,
        background: "#e2e5ef",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          borderRadius: 4,
          background: "linear-gradient(90deg, #6366f1, #14b8a6)",
          transition: "width 0.5s ease",
        }} />
      </div>
      <span style={{
        fontSize: "0.68rem",
        fontWeight: 600,
        color: "#64748b",
        minWidth: 28,
        textAlign: "right",
        fontVariantNumeric: "tabular-nums",
      }}>
        {progress}%
      </span>
    </div>
  );
};

export default ProgressDisplay;
