

const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

router.get('/:id', function(req, res, next) {
  service.getProducts();
  service.getCategories();
  const products = service.getCombinedProductMap();
  res.send(products[req.params.id]);
});

module.exports = router;
