/* eslint-disable import/no-unresolved */
const { Sequelize } = require('sequelize');

const { DB_USER, DB_PASSWORD } = process.env;
const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@3.21.162.140:5432/puccimaster`);
// const db = new Sequelize('test', 'rajugharti', 'querty', {
//   logging: false,
//   host: 'localhost',
//   dialect: 'postgres',
//   define: {
//     timestamps: false,
//   },
// });
module.exports = db;
