const db = require('./connection');

const User = require('./models/user');

User.sync();

module.exports.User = User;
