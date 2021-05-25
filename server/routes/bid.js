/* jshint esversion: 8 */
/* eslint-disable camelcase */
const express = require('express');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Bid, Post } = require('../database/index');

const checkNewBid = (req, res, next) => {
  const { body } = req;
  const requiredFields = [
    'post_id',
    'bidder_id',
    'bid',
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

router.post('/', authenticateUser, checkNewBid, async (req, res) => {
  const {
    post_id,
    bid,
  } = req.body;

  const { userId: bidder_id } = req;
  try {
    await Bid.create({
      post_id,
      bidder_id,
      bid,
    })
      .then((data) => res.status(201).send(data))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  try {
    Bid.findAll({
      where: {
        bidder_id: id,
      },
      include: [{
        model: Post,
        where: {
          userId: id,
        },
      }],
    })
      .then((data) => res.send(data))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

module.exports = router;
