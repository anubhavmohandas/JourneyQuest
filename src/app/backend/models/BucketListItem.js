// models/BucketListItem.js

const mongoose = require('mongoose');

const bucketListItemSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: '',
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const BucketListItem = mongoose.model('BucketListItem', bucketListItemSchema);

module.exports = BucketListItem;
