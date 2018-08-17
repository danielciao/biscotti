const express = require('express');
const pingRoute = require('./pingRoute');

module.exports = function routes() {
  const router = express.Router();

  pingRoute(router);

  return router;
};
