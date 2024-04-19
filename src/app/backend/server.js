const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Connecting with MongoDB
mongoose
  .connect('mongodb+srv://anubhavmohandas:xOtcJw7rZERT7r0C@cluster0.h2is1pe.mongodb.net/JourneyQuest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.reason);
  });

// Importing routes
const userRoute = require('./route'); // Routing to route.js

const app = express();

// Import createError
// const createError = require('http-errors');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, '/JourneyQuest')));
app.use('/', express.static(path.join(__dirname, '/JourneyQuest')));

// Routes
app.use('/api/users', userRoute);

// Port setup
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// 404 Error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
