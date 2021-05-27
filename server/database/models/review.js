const { DataTypes } = require('sequelize');
const db = require('../connection');

const Review = db.define('review', {

  reviewer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reviewee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  recommend: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Review;
