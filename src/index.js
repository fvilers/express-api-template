'use strict';

const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares');
const configuration = require('./configuration');
const app = express();

app.locals.namespace = configuration.debug;
app.use(cors(configuration.cors));
app.use(compression());
app.use(helmet());
app.use(bodyParser.json(configuration.json));
app.use(bodyParser.urlencoded(configuration.urlencoded));
app.use(morgan(configuration.morgan.format, morgan.options));
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler());

module.exports = Object.freeze(app);
