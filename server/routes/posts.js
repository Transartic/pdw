const express = require('express');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Post } = require('../database');

const checkNewPostInput = (req, res, next) => {
  const { body } = req;
  const manditoryField = ['duration', 'dateTime'];
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

// get all active posts
router.get('/', authenticateUser, (req, res) => {
  const { userId } = req;
  Post.findAll({
    where: {
      userId,
      status: true,
    },
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
  } = req.body;

  Post.create({
    userId,
    duration,
    dateTime,
    comments,
    services,
  })
    .then(() => res.status(201).send())
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
