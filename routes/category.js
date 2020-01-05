const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

/*
 * This method first gets the category ID from the request params.
 * Then it loops through the combinedProductMap.
 * It checks if the category id of that particular product is equal to the request param
 * If matches then push to the response array.
 */
router.get('/:ctyId', function(req, res, next) {
  service.getCombinedProductMap();
  const ctyId = req.params.ctyId;
  const response = [];
  for (const product in service.combinedProductMap) {
    if (service.combinedProductMap.hasOwnProperty(product)) {
      if (service.combinedProductMap[product].categoryId === ctyId) {
        response.push(service.combinedProductMap[product]);
      }
    }
  }
  res.send(response);
});

module.exports = router;
