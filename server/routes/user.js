/* eslint-disable camelcase */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

// login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    // if username is not in the DB return 404
    if (user === null) {
      res.status(404).send('Username Not Found');
      return;
    }

    // check that password is correct
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET);

      res.json({ accessToken });
    }

    res.status(400).send('Username or Password incorrect');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
