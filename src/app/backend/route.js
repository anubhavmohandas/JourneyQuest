const express = require('express');
const userRoute = express.Router();
// User model
let User = require('./models/User'); 

// Create a new user
userRoute.route('/create').post((req, res, next) => {
  User.create(req.body)
    .then((result) => {
      res.status(201).json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

// Login user
userRoute.route('/login').post((req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (!user || user.password !== password) { 
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful', user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

// Update user
userRoute.route('/update/:id').put((req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

// Delete user
userRoute.route('/delete/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

module.exports = userRoute;
