const express = require('express');
const router = express.Router();
const package = require('../package');

router.get('/', function (req, res, next) {
    res.send({
        'serverName': package.name,
        'serverVersion': package.version
    })
});

module.exports = router;
