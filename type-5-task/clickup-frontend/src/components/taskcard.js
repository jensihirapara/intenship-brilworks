import React from "react";

function TaskCard({ task, assigneeName }) {
  return (
    <div className="task-card" style={{
      backgroundColor: "#ffeef2",
      border: "2px solid #ffc0cb",
      borderRadius: "16px",
      padding: "16px",
      margin: "10px 0",
      boxShadow: "0 4px 6px rgba(255, 192, 203, 0.4)",
      transition: "transform 0.2s"
    }}>
      <h3 className="task-title" style={{ fontSize: "18px", fontWeight: "bold", color: "#d63384", marginBottom: "8px" }}>
        {task.title}
      </h3>
      <p className="task-assignee" style={{ fontSize: "14px", color: "#5c5c5c", margin: "2px 0" }}>
        👤 {assigneeName}
      </p>
      <p className="task-status" style={{ fontSize: "14px", color: "#5c5c5c", margin: "2px 0" }}>
        📌 {task.status}
      </p>
    </div>
  );
}

export default TaskCard;
