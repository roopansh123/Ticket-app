import React from "react";

const ProgressDisplay = ({ progress }) => {
  return (
    <div style={{ width: "100%", height: 3, borderRadius: 3, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          borderRadius: 3,
          background: "linear-gradient(90deg, #8b5cf6, #a78bfa)",
          boxShadow: progress > 0 ? "0 0 8px rgba(139,92,246,0.7)" : "none",
          transition: "width 0.5s ease",
        }}
      />
    </div>
  );
};

export default ProgressDisplay;
