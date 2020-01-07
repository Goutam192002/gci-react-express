const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

/*
 * This method first gets the category ID from the request params.
 * Then it loops through the combinedProductMap.
 * It checks if the category id of that particular product is equal to the request param
 * If matches then push to the response array.
 */
router.get('/:ctyId', function(req, res, next) {
  const { ctyId } = req.params;
  const response = [];
  const combinedProducts = Object.values(dataService.getCombinedProductMap());
  for (const product in  combinedProducts) {
      if (product.categoryId === ctyId) {
        response.push(combinedProducts[product]);
      }
    }
  res.send(response);
});

module.exports = router;
