const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

/*
 * This method returns the complete products array
 */
router.get('/all', function(req, res, next) {
  const products = dataService.getCombinedProductMap();
  const response = [];
  for (const product in products) {
    if (products.hasOwnProperty(product)) {
      response.push(products[product])
    }
  }
  res.send(response);
});

module.exports = router;
