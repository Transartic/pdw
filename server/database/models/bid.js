const { DataTypes, Deferrable } = require('sequelize');
const sequelize = require('../connection');
const { User } = require('./user');

const Bid = sequelize.define('bid', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
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
  services: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Bid;
