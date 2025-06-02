import React from "react";
import TaskCard from "./taskcard";

function TaskColumn({ title, tasks, users }) {
  return (
    <div className="task-column" style={{ flex: 1, border: "1px solid #ddd", padding: "8px", borderRadius: "8px", background: "#f9f9f9" }}>
      <h2>{title}</h2>
      {tasks.length === 0 && <p>No tasks</p>}
      {tasks.map((task) => {
        const assignee = users.find((user) => user.id === task.assignee);
        return (
          <TaskCard
            key={task.id}
            task={task}
            assigneeName={assignee ? assignee.name : "Unknown"}
          />
        );
      })}
    </div>
  );
}

export default TaskColumn;
