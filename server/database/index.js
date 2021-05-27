const db = require('./connection');

db.authenticate()
  .then(() => console.log('Connected to PostgreSQL...'))
  .catch((err) => console.error('Error connecting to the database'));

const User = require('./models/user');
const Post = require('./models/post');
const WalkMeta = require('./models/walkMeta');
const Review = require('./models/review');
const Bid = require('./models/bid');

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(WalkMeta);
WalkMeta.belongsTo(Post);

User.hasMany(Review, { foreignKey: 'id' });
Review.belongsTo(User, { foreignKey: 'reviewer_id', as: 'reviewer' });

Post.hasMany(Bid, { foreignKey: 'postId' });
Bid.belongsTo(Post, { foreignKey: 'postId' });

module.exports = {
  User,
  Review,
  Bid,
  WalkMeta,
  Post,
};
