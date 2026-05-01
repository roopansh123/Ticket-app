"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TicketForm = ({ ticket }) => {
  const router = useRouter();
  const EDITMODE = ticket?._id !== "new" && ticket?._id !== undefined;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(
    EDITMODE
      ? {
          title: ticket.title,
          description: ticket.description,
          priority: ticket.priority,
          progress: ticket.progress,
          status: ticket.status,
          category: ticket.category,
        }
      : startingTicketData
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) throw new Error("Failed to update Ticket.");
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) throw new Error("Failed to create Ticket.");
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "48px 24px" }}>
      <form
        style={{ width: "100%", maxWidth: 780 }}
        method="post"
        onSubmit={handleSubmit}
      >
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#8b5cf6", marginBottom: 8 }}>
            {EDITMODE ? "Edit Ticket" : "New Ticket"}
          </p>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#e2e8f0", letterSpacing: "-0.03em", marginBottom: 6 }}>
            {EDITMODE ? "Update Ticket" : "Create a Ticket"}
          </h2>
          <p style={{ fontSize: "0.82rem", color: "#3d3d70" }}>
            {EDITMODE ? "Modify the details below to update this issue." : "Fill in the details below to open a new issue."}
          </p>
        </div>

        {/* Two-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 32 }}>

          {/* Left — main */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Title</label>
            <input
              id="title" name="title" type="text"
              onChange={handleChange} required value={formData.title}
              placeholder="Short summary of the issue…"
            />

            <label>Description</label>
            <textarea
              id="description" name="description"
              onChange={handleChange} required value={formData.description}
              rows="10" placeholder="Describe the problem in detail…"
              style={{ resize: "vertical" }}
            />
          </div>

          {/* Right — meta */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Hardware Problem">Hardware Problem</option>
              <option value="Software Problem">Software Problem</option>
              <option value="Project">Project</option>
            </select>

            <label>Priority</label>
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              {[1, 2, 3, 4, 5].map((val) => (
                <label
                  key={val}
                  className={`priority-toggle${formData.priority == val ? " active" : ""}`}
                >
                  <input
                    type="radio" name="priority" value={val}
                    onChange={handleChange} checked={formData.priority == val}
                  />
                  {val}
                </label>
              ))}
            </div>

            <label>
              Progress{" "}
              <span style={{ color: "#a78bfa", textTransform: "none", letterSpacing: 0 }}>
                {formData.progress}%
              </span>
            </label>
            <input
              type="range" id="progress" name="progress"
              value={formData.progress} min="0" max="100"
              onChange={handleChange} style={{ marginTop: 8 }}
            />

            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="not started">Not Started</option>
              <option value="started">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div style={{ marginTop: "auto", paddingTop: 28 }}>
              <input
                type="submit"
                className="btn"
                value={EDITMODE ? "Update Ticket" : "Create Ticket"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
