'use strict';

const configuration = {
  cors: {
    origin: new RegExp(process.env.CORS_ORIGIN || 'http://localhost:4200')
  },
  debug: 'api:server',
  json: {
    limit: process.env.JSON_LIMIT || '2mb'
  },
  morgan: {
    format: process.env.MORGAN_FORMAT || 'dev',
    options: {
      skip: () => process.env.MORGAN_SKIP === 'true' || false
    }
  },
  urlencoded: {
    extended: false
  }
};

module.exports = Object.freeze(configuration);
