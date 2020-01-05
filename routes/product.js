

const express = require('express');
const router = express.Router();
const service = require('../services/dataService');

/*
 * This method gets the id of the product from the req params.
 * It gets the combinedProductMap and returns the product of that id;
 * Pretty Simple :)
 */
router.get('/:id', function(req, res, next) {
  const products = service.getCombinedProductMap();
  res.send(products[req.params.id]);
});

module.exports = router;
