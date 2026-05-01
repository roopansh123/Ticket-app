import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-us", {
      year: "numeric", month: "short", day: "2-digit",
    });
  };

  return (
    <div className="ticket-card">
      {/* Top row: priority + delete */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <PriorityDisplay priority={ticket.priority} />
        <DeleteBlock id={ticket._id} />
      </div>

      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4 style={{
          color: "#e2e8f4",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          lineHeight: 1.4,
          marginBottom: 10,
        }}>
          {ticket.title}
        </h4>

        <div style={{ height: 1, background: "#252548", marginBottom: 12 }} />

        <p style={{
          fontSize: "0.8rem",
          color: "#5a5a8a",
          lineHeight: 1.7,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          margin: 0,
        }}>
          {ticket.description}
        </p>

        <div style={{ flexGrow: 1 }} />

        <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #252548" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: "0.72rem", color: "#3d3d6a" }}>
                {formatTimestamp(ticket.createdAt)}
              </span>
              <ProgressDisplay progress={ticket.progress} />
            </div>
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
