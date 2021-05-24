const express = require('express');

const router = express.Router();

const authenticateToken = require('../middleware/authenticateToken');
const { WalkMeta } = require('../database');

router.get('/geojson/:postId', (req, res) => {
  const { postId } = req.params;
  WalkMeta.findAll({
    where: {
      postId,
    },
  })
    .then((walkMetaData) => walkMetaData.reduce((memo, point) => {
      memo.push([point.longitude.toFixed(4), point.latitude.toFixed(4)]);
      return memo;
    }, []))
    .then((geoJSONRoute) => res.send(geoJSONRoute))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err)});
});

router.post('/livelocation', (req, res) => {
  const { postId, lat, lon, event } = req.body;
  console.log(`{  lat: ${lat}, lon: ${lon}  }`)

  WalkMeta.create({
    postId: 1,
    latitude: lat,
    longitude: lon,
    event,
  })
    .then(() => res.status(201).end())
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
