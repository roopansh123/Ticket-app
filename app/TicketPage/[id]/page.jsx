import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const TicketPage = async ({ params }) => {
  const { id } = await params;

  return <TicketForm />;
};

export default TicketPage;
