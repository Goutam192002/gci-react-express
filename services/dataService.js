

const products = require('../src/data/products');
const categories = require('../src/data/categories');

const productMap = {};
const categoryMap = {};
const combinedProductMap = {};

const getProducts = () => {
  products.products.forEach(product => {
    productMap[product.id] = product;
  });
};

const getCategories = () => {
  categories.categories.forEach(category => {
    categoryMap[category.id] = category;
  });
};

const combineProductsWithCategories = () => {
  for (const product in productMap) {
    combinedProductMap[productMap[product].id] = {
      ...productMap[product],
      category: categoryMap[productMap[product].categoryId],
    };
  }
  console.log(combinedProductMap);
};

const getCombinedProductMap = () => {
  if (combinedProductMap) {
    combineProductsWithCategories();
  }
  return combinedProductMap;
};

module.exports = {
  getCombinedProductMap,
  getProducts,
  getCategories,
  productMap,
  categoryMap,
  combinedProductMap,
};
