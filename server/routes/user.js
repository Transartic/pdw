/* eslint-disable camelcase */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const { User } = require('../database');
const authenticateUser = require('../middleware/authenticateToken');

// Add a new user to the DB
const checkNewUserInput = (req, res, next) => {
  req = req.body.data;
  const manditoryField = ['username', 'email', 'first_name', 'last_name', 'password', 'address1', 'city', 'state', 'zipcode', 'user_type'];
  let hasAllRequiredFields = true;
  manditoryField.forEach((field) => {
    if (req[field] === undefined) {
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
  } = req.body.data;
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
      .then((user) => {
        const accessToken = jwt.sign({
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          user_id: user.id,
        }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
      })
      .catch((err) => res.status(500).send(err));
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/', authenticateUser, async (req, res) => {
  const { userId } = req;
  try {
    const user = await User.findOne({
      where: { id: userId },
      attributes: ['username', 'email', 'firstName', 'lastName', 'address1', 'address2', 'city', 'state', 'zipcode', 'dog_name', 'description', 'user_type', 'services', 'certifications'],
    });
    return res.json(user);
  } catch (err) {
    return res.status(500).end();
  }
});

module.exports = router;
