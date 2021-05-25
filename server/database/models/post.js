const { DataTypes } = require('sequelize');
const db = require('../connection');


const Post = db.define('post', {
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'date_time',
  },
  comments: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  services: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  maxPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'max_price',
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
  assignedWalker: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'walker_id',
  },
});

module.exports = Post;
