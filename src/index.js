'use strict';

const express = require('express');
const app = express();

app.use('*', (req, res) => res.sendStatus(404));

module.exports = app;
