const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');

/*
 * This method returns the complete products array
 */
router.get('/all', function(req, res, next) {
  const products = dataService.getCombinedProductMap();
  res.send(Object.values(products));
});

/*
 * This method gets the id of the product from the req params.
 * It gets the combinedProductMap and returns the product of that id;
 * Pretty Simple :)
 */
router.get('/:id', function(req, res, next) {
  const combinedProductMap = dataService.getCombinedProductMap();
  res.send(combinedProductMap[req.params.id]);
});

module.exports = router;
