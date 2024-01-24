const { API_ERROR_CONST } = require('../utils/constants');

const errorHandler = (error, req, res, next) => {
  // print just to trace the error
  console.error('Error:', error);

  const status = error.status || API_ERROR_CONST;
  // send back an easily understandable error message to the caller
  res.status(status).send({
    message: error.message,
    extra: error?.extra,
  });
};

module.exports = { errorHandler };
