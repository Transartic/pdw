const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const { User } = require('../database');

// login route
router.post('/', async (req, res) => {
  console.log(req.body.data);
  const { username, password } = req.body.data;
  try {
    const user = await User.findOne({ where: { username } });
    if (user === null) {
      res.status(404).send('Username Not Found');
      return;
    }
    // check that password is correct
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        user_id: user.id,
      }, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken });
    }
    res.status(400).send('Username or Password incorrect');
  } catch (err) {
    console.log('err 28 login.js', err);
    res.status(500).send(err);
  }
});

module.exports = router;
