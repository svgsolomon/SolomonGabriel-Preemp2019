const products = require("../src/products.json");

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const getProductsById = (req, res) => {
  res.status(200).json(
    products.filter(product => {
      return product.id === req.params.id;
    })
  );
};
const getProductsFromCategoryById = (req, res) => {
  res.status(200).json(
    products.filter(product => {
      return product.categories.includes(req.params.id);
    })
  );
};
module.exports = {
  getProducts,
  getProductsById,
  getProductsFromCategoryById
};
