const express = require('express');
const router = express.Router();
const products = require('../src/data/products');
const categories = require('../src/data/categories');

router.get('/:id', function(req, res, next) {
    const productId = req.params.id;
    let response = {};
    products.products.forEach( product => {
        if (product.id === productId) {
            response = product;
            categories.categories.forEach( category => {
                if (category.id === response.categoryId) {
                    response.category = category;
                }
            });
        }
    });
    res.send(response);
});

module.exports = router;
