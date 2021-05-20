require('dotenv').config();
const express = require('express');
const fs = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/', express.static(fs.resolve(__dirname, 'client', 'dist')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Express Server listening on ${port}...`);
});
