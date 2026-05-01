import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = ({ priority }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((level) => (
        <FontAwesomeIcon
          key={level}
          icon={faFire}
          style={{
            fontSize: "0.72rem",
            color: priority >= level ? "#f97316" : "#252548",
            filter: priority >= level ? "drop-shadow(0 0 5px rgba(249,115,22,0.75))" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default PriorityDisplay;
