/* jshint esversion: 8 */
/* eslint-disable camelcase */
const express = require('express');

const router = express.Router();
const { Bid, Post } = require('../database/index');

const checkNewBid = (req, res, next) => {
  const { body } = req;
  const requiredFields = [
    'user_id',
    'first_name',
    'last_name',
    'email',
    'bid',
    'services',
  ];

  let hasAllRequiredFields = true;

  requiredFields.forEach((field) => {
    if (body[field] === undefined) {
      hasAllRequiredFields = false;
    }
  });

  if (hasAllRequiredFields) {
    next();
    return;
  }

  res.status(400).send('Missing required field');
};

router.post('/bid', checkNewBid, async (req, res) => {
  try {
    await Bid.create(req.body)
      .then((data) => res.status(201).send(data))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/bid', (req, res) => {
  Post.hasMany(Bid, { foreignKey: 'post_id' });
  Bid.belongsTo(Post, { foreignKey: 'post_id' });
  try {
    Bid.findAll({
      include: [{
        model: Post,
      }],
    })
      .then((data) => res.send(data));
  }
  catch (err) { res.status(500).send(err); }
});

module.exports = router;
