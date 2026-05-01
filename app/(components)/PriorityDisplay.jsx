import React from "react";

const COLORS = ["#6366f1", "#0ea5e9", "#f59e0b", "#f97316", "#ef4444"];

const PriorityDisplay = ({ priority }) => {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((level) => {
        const active = priority >= level;
        return (
          <div
            key={level}
            style={{
              width: 5,
              height: 6 + level * 3,
              borderRadius: 2,
              background: active ? COLORS[level - 1] : "#d5d9e6",
              boxShadow: active ? `0 0 6px ${COLORS[level - 1]}44` : "none",
              transition: "background 0.2s",
            }}
          />
        );
      })}
    </div>
  );
};

export default PriorityDisplay;
