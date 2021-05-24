const db = require('./connection');

const User = require('./models/user');
const Post = require('./models/post');

User.hasMany(Post);
Post.belongsTo(User);

User.sync();
Post.sync();

module.exports.User = User;
module.exports.Post = Post;
