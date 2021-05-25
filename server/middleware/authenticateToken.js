const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.sendStatus(401).send('authorization token missing');
    return;
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) return res.sendStatus(403);
    req.userId = data.user_id;
    next();
  });
};
