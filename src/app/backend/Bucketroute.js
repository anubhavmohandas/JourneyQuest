const express = require('express');
const bucketRoute = express.Router();
// User model
let Bucket = require('./models/BucketListItem'); 
const BucketListItem = require('./models/BucketListItem');


// Create a new user
bucketRoute.route('/createBucket').post((req, res, next) => {

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

// 
bucketRoute.route('/deletebucket/:id').delete((req, res) => {
    BucketListItem.findByIdAndDelete(req.params.id)
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