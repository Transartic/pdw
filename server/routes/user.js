/* eslint-disable camelcase */
const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const { User } = require('../database');

// Add a new user to the DB
const checkNewUserInput = (req, res, next) => {
  const { body } = req;
  const manditoryField = ['username', 'email', 'first_name', 'last_name', 'password', 'address1', 'city', 'state', 'zipcode', 'user_type'];
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
router.post('/signup', checkNewUserInput, async (req, res) => {
  const {
    username,
    password,
    email,
    first_name,
    last_name,
    address1,
    address2,
    city,
    state,
    zipcode,
    dog_name,
    description,
    user_type,
    services,
    certifications,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    User.create({
      username,
      password: hashedPassword,
      email,
      firstName: first_name,
      lastName: last_name,
      address1,
      address2,
      city,
      state,
      zipcode,
      dogName: dog_name,
      description,
      userType: user_type,
      services,
      certifications,
    })
      .then((user) => res.status(201).send(user))
      .catch((err) => res.status(500).send(err));
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
