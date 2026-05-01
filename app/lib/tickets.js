import dbConnect from "./mongodb";
import Ticket from "../(models)/Ticket";

/**
 * Data-access helpers for server components.
 * Calling the DB directly avoids the hardcoded localhost fetch problem.
 */

export async function getTickets() {
  await dbConnect();
  const tickets = await Ticket.find().lean();
  // Serialize Mongoose documents (ObjectIds → strings, Dates → strings)
  return JSON.parse(JSON.stringify(tickets));
}

export async function getTicketById(id) {
  await dbConnect();
  const ticket = await Ticket.findById(id).lean();
  return JSON.parse(JSON.stringify(ticket));
}
