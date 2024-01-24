const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middlewares/error.middleware');
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Added a healthcheck route just to deployment easis
app.use(
  '/healthcheck',
  express.Router().get('/', (req, res) => res.status(200).send()),
);

app.use('/disasters', require('./routes/disasters.router'));

// Error middleware helper attached at the end of all routes
app.use(errorHandler);

// CORS Configuration
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,access-token');
  next();
});

module.exports = app;
