const { DataTypes } = require('sequelize');
const db = require('../connection');

const Bid = db.define('bid', {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'postId',
  },
  bidder_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Bid;
