"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`/api/Tickets/${id}`, { method: "DELETE" });
    if (res.ok) router.refresh();
  };

  return (
    <button
      onClick={deleteTicket}
      className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0"
      style={{
        background: "rgba(239,68,68,0.06)",
        border: "1px solid rgba(239,68,68,0.12)",
        color: "#ef4444",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(239,68,68,0.18)";
        e.currentTarget.style.borderColor = "rgba(239,68,68,0.4)";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(239,68,68,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(239,68,68,0.06)";
        e.currentTarget.style.borderColor = "rgba(239,68,68,0.12)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <FontAwesomeIcon icon={faTrash} style={{ fontSize: "0.65rem" }} />
    </button>
  );
};

export default DeleteBlock;
