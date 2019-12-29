const express = require('express');
const router = express.Router();
const products = require('../src/data/products');
const categories = require('../src/data/categories');

router.get('/all', function(req, res, next) {
    const response = [];
    products.products.forEach( product => {
        categories.categories.forEach( category => {
            if (product.categoryId === category.id) {
                product.category = category;
            }
        });
        response.push(product);
    });
    res.send(response);
});

module.exports = router;
