

const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

router.get('/:ctyId', function(req, res, next) {
  service.getProducts();
  service.getCategories();
  service.getCombinedProductMap();
  const ctyId = req.params.ctyId;
  const response = [];
  for (const product in service.productMap) {
    if (service.productMap[product].categoryId === ctyId) {
      response.push(service.combinedProductMap[product]);
    }
  }
  res.send(response);
});

module.exports = router;
