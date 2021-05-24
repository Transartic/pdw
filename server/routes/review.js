/* jshint esversion: 8 */
const express = require('express');

const router = express.Router();
const { Review, User} = require('../database/index');

const checkNewReview = (req, res, next) => {
  const { body } = req;
  const requiredFields = [
    'reviewer_id',
    'reviewee_id',
    'first_name',
    'last_name',
    'email',
    'rating',
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

router.post('/review', checkNewReview, async (req, res) => {
  try {
    await Review.create(req.body)
      .then((user) => res.status(201).send(user))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/review', (req, res) => {
  try {
    Review.findAll()
      .then((data) => res.send(data))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

module.exports = router;
