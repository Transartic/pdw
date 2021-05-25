const { DataTypes, Deferrable } = require('sequelize');
const db = require('../connection');
const { User } = require('./user');

const Review = db.define('review', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   unique: true,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  reviewer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reviewee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
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
