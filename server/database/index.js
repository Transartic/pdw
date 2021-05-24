const db = require('./connection');

const User = require('./models/user');
const Review = require('./models/review');

User.sync();
Review.sync();

// module.exports.User = User;
module.exports = {
  User,
  Review,
};
