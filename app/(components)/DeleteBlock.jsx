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
    <button className="delete-btn" onClick={deleteTicket}>
      <FontAwesomeIcon icon={faTrash} style={{ fontSize: "0.62rem" }} />
    </button>
  );
};

export default DeleteBlock;
