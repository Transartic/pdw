const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../index');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },

});

const Review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  reviewer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  reviewee_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
    },
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  date_time: {
    type: DataTypes.DATE,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  review: {
    type: DataTypes.TEXT,
  },
  recommend: {
    type: DataTypes.BOOLEAN,
  },

});

module.exports = {
  Review,
  User,
};
