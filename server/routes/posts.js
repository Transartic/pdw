const express = require('express');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Post, User } = require('../database');

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

// get all active posts for owner
router.get('/', authenticateUser, (req, res) => {
  const { userId } = req;
  Post.findAll({
    where: {
      userId,
      status: true,
    },
    include: User,
  })
    .then((userPosts) => res.send(userPosts))
    .catch((err) => res.status(500).send(err));
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

// need to make seperate route for walker and owner

module.exports = router;
