import React from "react";
import TicketCard from "./(components)/TicketCard";
import { getTickets } from "./lib/tickets";

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  let tickets = [];

  try {
    tickets = await getTickets();
  } catch (error) {
    console.error("Failed to get Tickets", error);
  }

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];

  const total       = tickets?.length ?? 0;
  const doneCount   = tickets?.filter((t) => t.status === "done").length ?? 0;
  const activeCount = tickets?.filter((t) => t.status === "started").length ?? 0;
  const openCount   = tickets?.filter((t) => t.status === "not started").length ?? 0;

  return (
    <div style={{ padding: "44px 48px", maxWidth: 1600, margin: "0 auto" }}>

      {/* Header */}
      <div className="page-header">
        <p className="page-eyebrow">Overview</p>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          {total} ticket{total !== 1 ? "s" : ""} across{" "}
          {uniqueCategories.length} categor{uniqueCategories.length !== 1 ? "ies" : "y"}
        </p>
      </div>

      {/* Stats bar */}
      {total > 0 && (
        <div className="stats-bar">
          <div className="stat-chip">
            <span className="stat-val stat-total">{total}</span>
            Total
          </div>
          <div className="stat-chip">
            <span className="stat-val stat-done">{doneCount}</span>
            Done
          </div>
          <div className="stat-chip">
            <span className="stat-val stat-active">{activeCount}</span>
            In&nbsp;Progress
          </div>
          <div className="stat-chip">
            <span className="stat-val stat-open">{openCount}</span>
            Not&nbsp;Started
          </div>
        </div>
      )}

      {/* Ticket grid, grouped by category */}
      {tickets && uniqueCategories.length > 0 ? (
        uniqueCategories.map((category, i) => {
          const categoryTickets = tickets.filter((t) => t.category === category);
          return (
            <div key={i} className="category-section">
              <div className="category-header">
                <span className="category-label">{category}</span>
                <div className="category-divider" />
                <span className="category-count">{categoryTickets.length}</span>
              </div>

              <div className="ticket-grid">
                {categoryTickets.map((ticket, j) => (
                  <TicketCard key={j} ticket={ticket} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🎫</div>
          <p className="empty-title">No tickets yet</p>
          <p className="empty-sub">Create your first ticket to get started.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
