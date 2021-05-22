const { Sequelize, DataTypes } = require('sequelize');

const { DB_USER, DB_PASSWORD } = process.env;
const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@3.21.162.140:5432/puccimaster`);

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  address1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dogname: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'dog_name',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // set wether user is owner (0) or walker (1)
  userType: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'user_type',
  },
  services: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  certifications: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

User.sync();

module.exports.db = db;
module.exports.User = User;
