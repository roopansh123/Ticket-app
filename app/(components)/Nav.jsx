import { faPlus, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="glass-nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 32px" }}>

      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>

        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
            boxShadow: "0 4px 14px rgba(139,92,246,0.55)",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#fff", fontSize: "0.8rem" }} />
          </div>
          <span style={{ color: "#e8eaf0", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
            TicketDesk
          </span>
        </Link>

        {/* Separator */}
        <div style={{ width: 1, height: 22, background: "#2c2c52" }} />

        {/* New Ticket button */}
        <Link href="/TicketPage/New" style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "8px 18px", borderRadius: 10,
          background: "rgba(139,92,246,0.12)",
          border: "1px solid rgba(139,92,246,0.3)",
          color: "#a78bfa",
          fontSize: "0.75rem", fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.09em",
          textDecoration: "none", transition: "all 0.2s",
        }}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "0.65rem" }} />
          New Ticket
        </Link>
      </div>

      {/* Right side — user */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 34, height: 34, borderRadius: "50%",
          background: "rgba(139,92,246,0.18)",
          border: "1.5px solid rgba(139,92,246,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.8rem", fontWeight: 800, color: "#c4b5fd", flexShrink: 0,
        }}>
          R
        </div>
        <span style={{ color: "#4a4a78", fontSize: "0.8rem" }}>
          sethiroopansh@gmail.com
        </span>
      </div>

    </nav>
  );
};

export default Nav;
