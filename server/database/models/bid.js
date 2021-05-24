const { DataTypes, Deferrable } = require('sequelize');
const db = require('../connection');
const { Post } = require('./post');

const Bid = db.define('bid', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  bid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Bid;
