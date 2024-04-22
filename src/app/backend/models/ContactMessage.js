const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for ContactMessage
let contactMessageSchema = new Schema({
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
