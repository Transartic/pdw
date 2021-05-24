require('dotenv').config();
const express = require('express');
const fs = require('path');
const morgan = require('morgan');
const db = require('./database/connection');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(fs.resolve(__dirname, '../client', 'dist')));

const authenticateUser = require('./middleware/authenticateToken');

app.get('/test', authenticateUser, (req, res) => {
  const testData = { ID: req.userId };
  res.json(testData);
});

// ================ ROUTES ==========================
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/login'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/walkmeta', require('./routes/walkmeta'));

module.exports = app;
