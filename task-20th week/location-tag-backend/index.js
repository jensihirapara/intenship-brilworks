const express = require('express');
const connectDB = require('./config/db');
const locationRoutes = require('./routes/locations');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

app.use(cors()); 

// middleware json body parse karne k liye
app.use(express.json());

// API routes
app.use('/api/locations', locationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
