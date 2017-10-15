'use strict';

const configuration = {
  cors: {
    origin: new RegExp(process.env.CORS_ORIGIN || 'http://localhost:4200')
  },
  morgan: {
    format: process.env.MORGAN_FORMAT || 'dev',
    skip: process.env.MORGAN_SKIP || false
  }
};

module.exports = Object.freeze(configuration);
