const express = require('express');
const router = express.Router();
const products = require('../src/data/products');
const categories = require('../src/data/categories');

router.get('/:ctyId', function(req, res, next) {
    const ctyId = req.params.ctyId;
    let currentCategory;
    let response = [];
    categories.categories.forEach( category => {
        if (category.id === ctyId) {
            currentCategory = category;
        }
    });
    products.products.forEach( product => {
        if (product.categoryId === ctyId) {
            response.push({
                ...product,
                category: currentCategory
            });
        }
    });
    res.send(response);
});

module.exports = router;
