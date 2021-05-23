const { Sequelize } = require('sequelize');
const model = require('../models/model');

// model.Review.create(
//   {
//     reviewer_id: 3,
//     reviewee_id: 1,
//     first_name: 'Maya',
//     last_name: 'Lama',
//     email: 'maya.lama@gmail.com',
//     date_time: new Date(),
//     rating: 1,
//     review: 'Raju is the worst dogwalker, don\'t hire him',
//     recommend: false,
//   },
// );

model.Review.findAll()
.then(data => console.log(data))
.catch(err => console.log(err));
