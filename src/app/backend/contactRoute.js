const express = require('express');
const contactRoute = express.Router();

let ContactMessage = require('./models/ContactMessage'); 

// Create a new contact message
contactRoute.route('/createcontact').post((req, res, next) => {
  ContactMessage.create(req.body)
    .then((result) => {
      res.status(201).json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

module.exports = contactRoute;
