import React, { useState, useEffect } from "react";
import axios from "axios"; // axios import
import TaskBoard from "./components/taskboard";
import TaskForm from "./components/taskform";
import FilterBar from "./components/filterbar";
import "./App.css";

const users = [
  { id: "1", name: "Jensi" },
  { id: "2", name: "Cherry" },
];

const statuses = ["To Do", "In Progress", "Done"];

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ user: "", status: "" });
  const [showForm, setShowForm] = useState(false);

  // Get tasks from backend when page loads
  useEffect(() => {
    fetchTasksFromBackend();
  }, []);

  const fetchTasksFromBackend = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Submit task to backend
  const handleFormSubmit = async (taskData) => {
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", taskData);
      const savedTask = response.data;

      setTasks((prevTasks) => [...prevTasks, savedTask]);
      setShowForm(false);
      alert("Task saved to MongoDB!");
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task.");
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <FilterBar
        users={users}
        statuses={statuses}
        filters={filters}
        onFilterChange={setFilters}
        onAddTaskClick={() => setShowForm(true)}
      />

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>✖</button>
            <TaskForm
              users={users}
              statuses={statuses}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}

      <TaskBoard
        tasks={tasks}
        users={users}
        statuses={statuses}
        filters={filters}
      />
    </div>
  );
}

export default App;
