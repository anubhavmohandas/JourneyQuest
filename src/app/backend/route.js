const express = require('express');
const Route = express.Router();
// User model
let User = require('./models/User'); 
let Bucket = require('./models/BucketListItem');
let Contact = require('./models/ContactMessage');
let travel = require('./models/travel');


// Create a new user
Route.route('/create').post((req, res, next) => {
  // Generate a unique userId
  const userId = `user_${Date.now()}`;

  // Create a new user with the generated userId
  User.create({...req.body, userId })
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
Route.route('/login').post((req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (!user) { 
        return res.status(400).json({ message: 'User not found. Please create an account.' });
      }
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      res.json({ message: 'Login successful', user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

// Update user
Route.route('/update/:id').put((req, res) => {
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
Route.route('/delete/:id').delete((req, res) => {
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

// Bucket List
Route.route('/createBucket').post((req, res, next) => {

  // Create a new user with the generated userId
  Bucket.create(req.body)
    .then((result) => {
      res.status(201).json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

// Travel
Route.route('/createtravel').post((req, res, next) => {

  // Create a new user with the generated userId
  travel.create(req.body)
    .then((result) => {
      res.status(201).json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message });
    });
});

// 
Route.route('/deletebucket/:id').delete((req, res) => {
    Bucket.findByIdAndDelete(req.params.id)
      .then((bucket) => {
        if (!bucket) {
          return res.status(404).json({ message: 'Bucket not found' });
        }
        res.json(bucket);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: err.message });
      });
  });

  Route.route('/createcontact').post((req, res, next) => {

    // Create a new user with the generated userId
    Contact.create(req.body)
      .then((result) => {
        res.status(201).json(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: err.message });
      });
  });
  
module.exports = Route;