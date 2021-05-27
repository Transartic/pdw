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
  const revs = [];
  let avg = 0;
  let count = 0;
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
        reviews.forEach(review => {
          avg += review.rating;
          count++;
        });
        const avrg = { average: avg / count };
        reviews = Object.assign(avrg, { ...reviews });
        for (const key in reviews) {
          if (key === 'average') {
            let avObject = {
              average: reviews[key],
            }
            revs.push(avObject);
          } else {
            revs.push(reviews[key]);
          }
        }

        res.json(revs);
      })
      .catch(err => console.log(err));
  }
  catch (err) { res.status(500).send(err); }
});


module.exports = router;
