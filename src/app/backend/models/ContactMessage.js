const mongoose = require('mongoose');

// schema for ContactMessage
let contactMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
