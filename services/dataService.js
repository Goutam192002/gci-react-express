const productMap = {};
const categoryMap = {};
const combinedProductMap = {};

/*
 * This method loops through the products array and maps them to a variable called productMap
 */
const getProducts = () => {
  const products = require('../src/data/products');

  products.products.forEach(product => {
    productMap[product.id] = product;
  });
};

/*
 * This method loops through the categories array and maps them to a variable called categoryMap
 */
const getCategories = () => {
  const categories = require('../src/data/categories');

  categories.categories.forEach(category => {
    categoryMap[category.id] = category;
  });
};

/*
 * This method checks if productMap exists otherwise calls the getProducts()
 * It also checks if categoryMap exists otherwise calls the getCategories()
 * Then it loops through the productMap and a hasOwnProperty is put to check if the key exists in the map.
 * Then we combine the category and product and assign it to the combinedProductMap
 */
const combineProductsWithCategories = () => {
  if (Object.entries(categoryMap).length === 0 && categoryMap.constructor === Object) {
    getProducts();
  }
  if (Object.entries(categoryMap).length === 0 && categoryMap.constructor === Object) {
    getCategories();
  }
  for (const product in productMap) {
    if (productMap.hasOwnProperty(product)) {
      combinedProductMap[productMap[product].id] = {
        ...productMap[product],
        category: categoryMap[productMap[product].categoryId],
      };
    }
  }
};

/*
 * A kinda getter method to get combinedProductMap variable.
 */
const getCombinedProductMap = () => {
  if (Object.entries(combinedProductMap).length === 0 && combinedProductMap.constructor === Object) {
    combineProductsWithCategories();
  }
  return combinedProductMap;
};

module.exports = {
  getCombinedProductMap,
};
