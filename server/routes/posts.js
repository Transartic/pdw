const express = require('express');
const moment = require('moment');
const { Op } = require('sequelize');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Post, User, Bid } = require('../database');

const checkNewPostInput = (req, res, next) => {
  const { body } = req;
  const manditoryField = ['duration', 'dateTime', 'maxPrice'];
  let hasAllRequiredFields = true;
  manditoryField.forEach((field) => {
    if (body[field] === undefined) {
      hasAllRequiredFields = false;
    }
  });

  if (hasAllRequiredFields) {
    next();
    return;
  }
  res.status(400).send('missing required field');
};

router.get('/', authenticateUser, (req, res) => {
  const { userId } = req;
  Post.findAll({
    where: {
      [Op.or]: [{ userId }, { assignedWalker: userId }],
      status: true,
      dateTime: {
        [Op.gte]: moment().toDate(),
      },
    },
    include: [
      {
        model: User,
        attributes: ['firstName', 'dogname', 'address1'],
      },
      {
        model: Bid,
        attributes: ['post_id', 'bidder_id', 'bid'],
      },
    ],
  })
    .then((userPosts) => res.send(userPosts))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)
    });
});

router.get('/all', authenticateUser, (req, res) => {
  Post.findAll({
    where: {
      dateTime: {
        [Op.gte]: moment().toDate(),
      },
    },
    include: [
      {
        model: User,
        attributes: ['firstName', 'dogname', 'address1'],
      },
      {
        model: Bid,
        attributes: ['id', 'bidder_id', 'bid'],
      },
    ],
  })
    .then((posts) => res.send(posts));
});

router.post('/', authenticateUser, checkNewPostInput, (req, res) => {
  const { userId } = req;
  const {
    duration,
    dateTime,
    comments,
    services,
    maxPrice,
  } = req.body;

  Post.create({
    userId,
    duration,
    maxPrice,
    dateTime,
    comments,
    services,
  })
    .then(() => res.status(201).send())
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
