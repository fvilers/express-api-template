'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const configuration = require('./configuration');
const app = express();

app.use(cors(configuration.cors));
app.use(compression());
app.use(helmet());
app.use(morgan(configuration.morgan.format, { skip: () => configuration.morgan.skip }));
app.use('*', (req, res) => res.sendStatus(404));

module.exports = app;
