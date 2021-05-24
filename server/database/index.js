const db = require('./connection');

const User = require('./models/user');
const Review = require('./models/review');
const Bid = require('./models/bid');

User.sync();
Review.sync();
Bid.sync();

// module.exports.User = User;
module.exports = {
  User,
  Review,
  Bid,
};
