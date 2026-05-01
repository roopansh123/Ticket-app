import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  { timestamps: true }
);

// Guard key must match the registered model name ("Tickets")
const Ticket = mongoose.models.Tickets || mongoose.model("Tickets", ticketSchema);

export default Ticket;
