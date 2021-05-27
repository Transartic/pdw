/* jshint esversion: 8 */
/* eslint-disable camelcase */
const express = require('express');
const authenticateUser = require('../middleware/authenticateToken');

const router = express.Router();
const { Review, User } = require('../database/index');

const checkNewReview = (req, res, next) => {
  const { body } = req;
  const requiredFields = [
    'reviewee_id',
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

router.post('/', authenticateUser, checkNewReview, async (req, res) => {
  const {
    reviewee_id,
    rating,
    review,
    recommend,
  } = req.body;

  const { userId: reviewer_id } = req;

  try {
    await Review.create({
      reviewer_id,
      reviewee_id,
      rating,
      review,
      recommend,
    })
      .then((success) => res.sendStatus(201))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/:id', authenticateUser, (req, res) => {
  const { id } = req.params;

  try {
    Review.findAll({
      where: {
        reviewee_id: id,
      },
      include: {
        model: User,
        as: 'reviewer',
        attributes: ['first_name', 'last_name'],
      },
    })
      .then((reviews) => {
        res.json(reviews);
      })
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

module.exports = router;
