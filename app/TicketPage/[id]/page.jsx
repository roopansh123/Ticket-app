import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to get ticket");
  return res.json();
};

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id !== "New";

  let updateTicketData = { _id: "new" };

  if (EDITMODE) {
    const data = await getTicketById(id);
    updateTicketData = data.foundTicket;
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
