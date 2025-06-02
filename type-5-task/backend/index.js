const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // agar tumne db connection file banayi hai
const tasksRouter = require('./routes/tasks');

const app = express();

// Connect to DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());  // JSON body parse karne ke liye

// Routes
app.use('/api/tasks', tasksRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});


