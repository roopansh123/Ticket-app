import { faPlus, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="glass-nav">
      <div className="nav-left">
        <Link href="/" className="nav-brand">
          <div className="nav-logo">
            <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#fff", fontSize: "0.78rem" }} />
          </div>
          <span className="nav-title">TicketDesk</span>
        </Link>

        <div className="nav-sep" />

        <Link href="/TicketPage/New" className="nav-new-btn">
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "0.6rem" }} />
          New Ticket
        </Link>
      </div>

      <div className="nav-right">
        <div className="nav-avatar">S</div>
        <span className="nav-email">sethiroopansh@gmail.com</span>
      </div>
    </nav>
  );
};

export default Nav;
