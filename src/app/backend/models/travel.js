const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripName: { type: String, required: true },
  tripDescription: { type: String },
  destination: { type: String, required: true },
  country: { type: String },
  city: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  transportation: { type: String },
  departureCity: { type: String },
  departureDate: { type: Date },
  returnDate: { type: Date },
  accommodationType: { type: String },
  accommodationName: { type: String },
  bookingConfirmation: { type: String },
  activities: { type: String },
  attractions: { type: String },
  totalBudget: { type: Number },
  dailyBudget: { type: Number },
  notes: { type: String },
  packingList: { type: String },
  status: { type: String },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Trip', tripSchema);
