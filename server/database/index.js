const db = require('./connection');

const User = require('./models/user');
<<<<<<< HEAD
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
=======
const Post = require('./models/post');

User.hasMany(Post);
Post.belongsTo(User);

User.sync();
Post.sync();

module.exports.User = User;
module.exports.Post = Post;
>>>>>>> b24006ba265d91d5859ff4112f14342776e90c17
