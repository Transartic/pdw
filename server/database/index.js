const db = require('./connection');

db.authenticate().then(() => console.log('Connected to PostgreSQL...'));

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
Review.belongsTo(User, { foreignKey: 'id', as: 'reviewer' });

Post.hasMany(Bid);
Bid.belongsTo(Post, { foreignKey: 'bidder_id' });
// User.hasMany(Bid);
// Bid.belongsTo(User);

Photo.belongsTo(User, { foreignKey: 'id' });

User.sync({ alter: true });
Post.sync({ alter: true });
WalkMeta.sync({ alter: true });
Review.sync({ alter: true });
Bid.sync({ alter: true });
Photo.sync({ alter: true });

module.exports = {
  User,
  Review,
  Bid,
  WalkMeta,
  Post,
};
