// Import required modules
const express = require('express');

// Initialize the Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic Routes
app.get('/', (req, res) => {
  res.send('Welcome to my Express server!');
});

// Example GET route
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  res.json(users);
});

// Example POST route
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({
    message: 'User created successfully!',
    user: newUser,
  });
});

// Example route with URL parameter
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `You requested information for user with ID: ${userId}`,
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
