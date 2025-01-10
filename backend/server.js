// Require and use express
const express = require('express');
const app = express();

// Dotenv
require('dotenv').config(); // Load environment variables
const port = process.env.PORT || 3000;

let hasError = false;

// Cors setup
const cors = require("cors");
app.use(cors({
  origin: "http://73.83.92.175:3000" // Allow only your React app
}));

// Express json middleware
app.use(express.json());

// Middleware to log errors and set the error flag
app.use((err, req, res, next) => {
  hasError = true; // Set the error flag
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Example route to simulate error
app.get('/cause-error', (req, res, next) => {
  next(new Error('Something went wrong!'));
  hasError = true; // Set the error flag
});

// Routes
const gamingPcRoutes = require('./routes/gamingpcs');
app.use('/api/gamingpcs', gamingPcRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    error: hasError ? "An error occurred!" : "No errors.",
  });
});

// Endpoint to check if there is a current error
app.get('/status', (req, res) => {
  res.json({
    hasError,
  });

  // Reset the error flag after reporting
  hasError = false;
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start web server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
