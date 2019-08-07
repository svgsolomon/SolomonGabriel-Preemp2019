const categories = require("../src/categories.json");
const { getProductsFromCategoryById } = require("../controllers/products");

const getCategories = (req, res) => {
  res.status(200).json(categories);
};

const getCategoriesById = (req, res) => {
  res.status(200).json(
    categories.filter(category => {
      return category.id === req.params.id;
    })
  );
};
module.exports = {
  getCategories,
  getCategoriesById,
  getProductsFromCategoryById
};
