import TicketForm from "@/app/(components)/TicketForm";
import { getTicketById } from "@/app/lib/tickets";
import React from "react";

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id !== "New";

  let updateTicketData = { _id: "new" };

  if (EDITMODE) {
    try {
      updateTicketData = await getTicketById(id);
    } catch (error) {
      console.error("Failed to get ticket", error);
    }
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
