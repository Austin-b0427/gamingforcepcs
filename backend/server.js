// Require express
const express = require('express');
const app = express();
// Load environment variables from .env file
require('dotenv').config();

//Require mongoose
const mongoose = require('mongoose')

const mongo_uri = process.env.MONGO_URI
const port = process.env.PORT

app.use(express.json()); // Middleware to for JSON in request body

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.json({message: "Hello, World!"})
})

// Backend
app.get('/api/data', (req, res) => {
  res.json({
    mssg: 'Hello from the backend!',
    user: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    isAuthenticated: true,
    items: [
      { id: 103, name: 'Item 1', price: 105 },
      { id: 106, name: 'Item 3', price: 50 },
      { id: 132, name: 'Item 4', price: 40 },
      { id: 129, name: 'Item 2', price: 20.0 }
    ],
    timestamp: new Date(),
  });
});

// Connect to mongo and start web server
mongoose.connect(mongo_uri)
  .then(() => {
    console.log("Connected to mongodb")
    // Start web server
    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);

  })