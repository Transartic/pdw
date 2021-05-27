const db = require('./connection');

db.authenticate()
  .then(() => console.log('Connected to PostgreSQL...'))
  .catch((err) => console.error('Error connecting to the database'));

const User = require('./models/user');
const Post = require('./models/post');
const WalkMeta = require('./models/walkMeta');
const Review = require('./models/review');
const Bid = require('./models/bid');
const Photo = require('./models/photo');

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(WalkMeta);
WalkMeta.belongsTo(Post);

User.hasMany(Review, { foreignKey: 'reviewee_id' });
Review.belongsTo(User, { foreignKey: 'reviewer_id', as: 'reviewer' });

Post.hasMany(Bid, { foreignKey: 'postId' });
Bid.belongsTo(Post, { foreignKey: 'postId' });
User.hasMany(Bid, { foreignKey: 'bidder_id' });
Bid.belongsTo(User, { foreignKey: 'bidder_id' });

Photo.belongsTo(User, { foreignKey: 'id' });

module.exports = {
  User,
  Review,
  Bid,
  WalkMeta,
  Post,
};
