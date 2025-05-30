const express = require("express");
require("dotenv").config();

const app = express();

const course = [
  { id: 1, name: 'jensi' },
  { id: 2, name: 'hema' },
  { id: 3, name: 'tara' }
];

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route to return all courses
app.get("/numbers", (req, res) => {
  res.json(course);
});

// Route with dynamic parameter to find a course by ID
app.get("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = course.find(c => c.id === id);

  if (!result) {
    return res.status(404).send("Course not found");
  }

  res.json(result);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port 5000...`);
});

