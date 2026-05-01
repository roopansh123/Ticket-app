import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTicket = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get Tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTicket();
  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];

  return (
    <div style={{ padding: "44px 48px", maxWidth: 1600, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#8b5cf6", marginBottom: 10 }}>
          Overview
        </p>
        <h1 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#e8eaf0", marginBottom: 6, letterSpacing: "-0.03em" }}>
          Dashboard
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#4a4a78" }}>
          {tickets?.length ?? 0} ticket{tickets?.length !== 1 ? "s" : ""} across {uniqueCategories.length} categor{uniqueCategories.length !== 1 ? "ies" : "y"}
        </p>
      </div>

      {tickets && uniqueCategories.length > 0 ? (
        uniqueCategories.map((uniqueCategory, categoryIndex) => {
          const categoryTickets = tickets.filter(t => t.category === uniqueCategory);
          return (
            <div key={categoryIndex} style={{ marginBottom: 52 }}>
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.13em", color: "#5a5a8a", whiteSpace: "nowrap" }}>
                  {uniqueCategory}
                </span>
                <div className="divider" />
                <span style={{
                  fontSize: "0.72rem", fontWeight: 700,
                  padding: "3px 11px", borderRadius: 20,
                  background: "rgba(139,92,246,0.14)",
                  border: "1px solid rgba(139,92,246,0.28)",
                  color: "#a78bfa",
                }}>
                  {categoryTickets.length}
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
                {categoryTickets.map((filteredTicket, index) => (
                  <TicketCard id={index} key={index} ticket={filteredTicket} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 100, paddingBottom: 100, textAlign: "center" }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18,
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.22)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.8rem", marginBottom: 20,
          }}>
            🎫
          </div>
          <h3 style={{ color: "#e8eaf0", fontWeight: 700, marginBottom: 8 }}>No tickets yet</h3>
          <p style={{ color: "#4a4a78", fontSize: "0.875rem" }}>Create your first ticket to get started.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
