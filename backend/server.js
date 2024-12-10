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

app.get('/', (req, res) => {
  res.json({mssg: "Hello, World!"})
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// Connect to mongo
mongoose.connect(mongo_uri)
  .then(() => {
    console.log("Connected to mongodb")
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);

  })