/* jshint esversion: 8 */
require('dotenv').config();

const { Sequelize } = require('sequelize');

const dbName = process.env.DATABASE_NAME;
const userName = process.env.USER_NAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, userName, password, {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: false,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
