/* jshint esversion: 8 */
const express = require('express');

const router = express.Router();
const { Review, User } = require('../database/index');

const authenticateUser = require('../middleware/authenticateToken');

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
      .then((user) => res.status(201).send(user))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

router.get('/:walkerId', authenticateUser, (req, res) => {
  const { walkerId } = req.params;
  const replyObj = {};

  try {
    Review.findAll({
      where: {
        reviewee_id: walkerId,
      },
      include: User
    })
      .then((reviews) => {
        replyObj.reviews = reviews;
      })
      .then(() => {
        const getNames = [];
        replyObj.reviews.forEach((review) => {
          getNames.push(User.findByPk(review.reviewer_id));
        });
        return getNames;
      })
      // .then((arrNames) => Promise.all(arrNames).then(((users) => )))
      .then(() => res.send(replyObj))
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});

module.exports = router;
