'use strict';

const configuration = {
  cors: {
    origin: new RegExp(process.env.CORS_ORIGIN || 'http://localhost:4200')
  }
};

module.exports = Object.freeze(configuration);
