const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

/*
 * This method first gets the category ID from the request params.
 * Then it loops through the combinedProductMap.
 * It checks if the category id of that particular product is equal to the request param
 * If matches then map it in the response
 */
router.get('/:ctyId', function(req, res, next) {
  const { ctyId } = req.params;
  const response = {};
  const combinedProductsMap = dataService.getCombinedProductMap();
  for (let product in combinedProductsMap) {
    if (combinedProductsMap.hasOwnProperty(product)) {
      if (combinedProductsMap[product].categoryId === ctyId) {
        response[product] = combinedProductsMap[product]
      }
    }
  }
  res.send(response);
});

module.exports = router;
