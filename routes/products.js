

const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

/*
 * This method returns the complete products array
 */
router.get('/all', function(req, res, next) {
  res.send(service.getCombinedProductMap());
});

module.exports = router;
