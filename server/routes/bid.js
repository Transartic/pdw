/* jshint esversion: 8 */
/* eslint-disable camelcase */
const express = require('express');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Bid, Post } = require('../database/index');

const checkNewBid = (req, res, next) => {
  const { body } = req;
  const requiredFields = [
    'postId',
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
    postId,
    bid,
  } = req.body;

  const { userId: bidder_id } = req;
  try {
    await Bid.create({
      postId,
      bidder_id,
      bid,
    })
      .then((success) => {
        console.log(success);
        res.sendStatus(201); })
      .catch(err => {
        console.log(err);
        res.sendStatus(404);
      });
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
      attributes: { exclude: ['postId'] },
      include: Post,
    })
      .then((data) => res.json(data))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/', (req, res) => {
  Bid.findAll({
    attributes: [['bidder_id', 'user_id'], 'bid'],
  })
    .then(bids => res.json(bids))
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    });
});
module.exports = router;
