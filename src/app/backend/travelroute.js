const express = require('express');
const travelroute = express.Router();

const Trip = require('./models/travel');

// Create a new trip
travelroute.route('/createtravel').post(async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = travelroute;
