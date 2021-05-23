const model = require('../models/model');

model.Review.findAll()
.then(data => console.log(data))
.catch(err => console.log(err));
