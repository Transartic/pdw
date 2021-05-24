const { DataTypes } = require('sequelize');
const db = require('../connection');

const WalkMeta = db.define('walk', {
  latitude: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.REAL,
    allowNull: false,
  },
  event: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  // don't forget to enable timestamps!
  timestamps: true,
  createdAt: 'timestamp',

  updatedAt: false,
});

module.exports = WalkMeta;
