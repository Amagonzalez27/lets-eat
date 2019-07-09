const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Logging Middleware
app.use(morgan('dev'));

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', require('./api/index'));

// Error Handling Middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
