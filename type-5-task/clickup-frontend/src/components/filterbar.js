import React from "react";
import "./filterbar.css";

function FilterBar({ users, statuses, filters, onFilterChange, onAddTaskClick }) {
  return (
    <div className="filter-bar">
      <select
        className="filter-select" // 👈 pastel style
        value={filters.user}
        onChange={(e) => onFilterChange({ ...filters, user: e.target.value })}
      >
        <option value="">All Assignees</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>

      <select
        className="filter-select" // 👈 pastel style
        value={filters.status}
        onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
      >
        <option value="">All Statuses</option>
        {statuses.map((status) => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

      {/* 👇 Add Task Button */}
      <button className="add-task-button" onClick={onAddTaskClick}>
        ➕ Add Task
      </button>
    </div>
  );
}

export default FilterBar;
