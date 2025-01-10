const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import the GamingPC model
const GamingPC = require('../models/gamingpcs'); // Ensure you have this model defined

// Import the database connection
const connectDB = require('../components/db');
connectDB(); // Establish the MongoDB connection

// Middleware to parse JSON
router.use(express.json());

// GET all gaming PCs
router.get('/', async (req, res) => {
  try {
    const pcs = await GamingPC.find(); // Fetch all gaming PCs
    res.json(pcs);
  } catch (error) {
    console.error('Error fetching gaming PCs:', error);
    res.status(500).json({ error: 'Unable to fetch gaming PCs' });
  }
});

// POST to add a gaming PC
router.post('/', async (req, res) => {
  //console.log('Incoming POST request:', req.body); // Log request body
  try {
    const newPc = new GamingPC(req.body);
    await newPc.save();
    //console.log('New PC saved:', newPc); // Log saved PC
    res.status(201).json(newPc);
  } catch (error) {
    //console.error('Error saving gaming PC:', error); // Log error details
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
