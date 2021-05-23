require('dotenv').config();
const express = require('express');
const fs = require('path');
const morgan = require('morgan');
require('../databse/controllers/controller');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(fs.resolve(__dirname, '../client', 'dist')));

module.exports = app;
