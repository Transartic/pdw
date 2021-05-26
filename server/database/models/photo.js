const { DataTypes } = require('sequelize');
const db = require('../connection');

const Photo = db.define('photo', {
  image: {
    type: DataTypes.BLOB('long'),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Photo;
