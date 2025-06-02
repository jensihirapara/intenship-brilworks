// src/components/taskboard.js
import React from "react";
import TaskColumn from "./taskcolumn";
import "./taskbord.css";

function TaskBoard({ tasks, users, statuses, filters }) {
  const filteredTasks = tasks.filter((task) => {
    const matchUser = !filters.user || task.assignee === filters.user;
    const matchStatus = !filters.status || task.status === filters.status;
    return matchUser && matchStatus;
  });

  return (
    <div className="task-board">
      {statuses.map((status) => {
        const tasksByStatus = filteredTasks.filter((task) => task.status === status);
        return (
          <TaskColumn
            key={status}
            title={status}
            tasks={tasksByStatus}
            users={users}
          />
        );
      })}
    </div>
  );
}

export default TaskBoard;
