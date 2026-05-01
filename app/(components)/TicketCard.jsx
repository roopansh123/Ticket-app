import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) =>
    new Date(timestamp).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

  return (
    <div className="ticket-card">
      <div className="card-top-row">
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>

      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="card-title">{ticket.title}</h4>
        <div className="card-rule" />
        <p className="card-desc">{ticket.description}</p>
        <div className="card-footer">
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="card-date">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <StatusDisplay status={ticket.status} />
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
