

const express = require('express');
const router = express.Router();
const packageJSON = require('../package');

router.get('/', function(req, res, next) {
  res.send({
    serverName: packageJSON.name,
    serverVersion: packageJSON.version,
  });
});

module.exports = router;
