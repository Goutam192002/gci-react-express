

const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

router.get('/all', function(req, res, next) {
  service.getProducts();
  service.getCategories();
  res.send(service.getCombinedProductMap());
});

module.exports = router;
