import React from "react";

const getColor = (status) => {
  const colorMap = {
    done: "bg-green-100 text-green-800 border border-green-300",
    started: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    "not started": "bg-red-100 text-red-800 border border-red-300",
  };
  return (
    colorMap[status.toLowerCase()] ||
    "bg-slate-100 text-slate-800 border border-slate-300"
  );
};

const StatusDisplay = ({ status }) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${getColor(status)}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
