const db = require('./connection');

db.authenticate().then(() => console.log('Connected to PostgreSQL...'));

const User = require('./models/user');
const Post = require('./models/post');
const WalkMeta = require('./models/walkMeta');
const Review = require('./models/review');
const Bid = require('./models/bid');

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(WalkMeta);
WalkMeta.belongsTo(Post);

User.sync();
Post.sync();
WalkMeta.sync({ force: true });
Review.sync();
Bid.sync();

// module.exports.User = User;
module.exports = {
  User,
  Review,
  Bid,
  WalkMeta,
};
