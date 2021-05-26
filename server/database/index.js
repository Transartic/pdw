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

User.hasMany(Review, { foreignKey: 'reviewee_id' });
Review.belongsTo(User, { foreignKey: 'id', as: 'reviewer' });

Post.hasMany(Bid, { foreignKey: 'bidder_id' });
Bid.belongsTo(Post, { foreignKey: 'bidder_id' });
//  Post.hasMany(Bid, { foreignKey: 'bidder_id' });

User.sync();
Post.sync();
WalkMeta.sync();
Review.sync();
Bid.sync();

module.exports = {
  User,
  Review,
  Bid,
  WalkMeta,
  Post,
};
