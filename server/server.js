require('dotenv').config();
const express = require('express');
const fs = require('path');
const morgan = require('morgan');
const { db } = require('./database');

db.authenticate().then(() => console.log('Connected to PostgreSQL...'));

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(fs.resolve(__dirname, '../client', 'dist')));

// ================ ROUTES ==========================
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/login'));

module.exports = app;
