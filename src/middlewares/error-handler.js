'use strict';

const debug = require('debug');

function errorHandler() {
  return process.env.NODE_ENV === 'production' ? errorHandler : debugErrorHandler;

  function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.sendStatus(err.status || 500);
  }

  function debugErrorHandler(err, req, res, next) {
    debug(req.app.locals.namespace)(err);

    if (res.headersSent) {
      return next(err);
    }

    res.status(err.status || 500).send(err);
  }
}

module.exports = errorHandler;
