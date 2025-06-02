import React, { useState } from "react";
import "./taskform.css"; // make sure this CSS file exists

function TaskForm({ users, statuses, onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [assignee, setAssignee] = useState(initialData?.assignee || "");
  const [status, setStatus] = useState(initialData?.status || statuses[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    if (!assignee) {
      alert("Please select an assignee");
      return;
    }
    if (!status) {
      alert("Please select a status");
      return;
    }
                                                                                                                                
    onSubmit({ title, description, assignee, status });
                                                                                                 
    // reset form
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus(statuses[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add New Task</h2>

      <div className="form-group">
        <label className="form-label">Title*</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          placeholder="Enter task title"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          placeholder="Enter task description"
          rows={3}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Assignee*</label>
        <select
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Select assignee</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Status*</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-select"
          required
        >
          {statuses.map((statusOption) => (
            <option key={statusOption} value={statusOption}>
              {statusOption}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">Save Task</button>
    </form>
  );
}

export default TaskForm;
