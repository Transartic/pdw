const { DataTypes } = require('sequelize');
const db = require('../connection');

const Bid = db.define('bid', {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Bid;
