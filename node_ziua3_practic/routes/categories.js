const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategoriesById,
  getProductsFromCategoryById
} = require("../controllers/categories");

router.get("/categories", getCategories);
router.get("/categories/:id", getCategoriesById);
router.get("/categories/:id/products", getProductsFromCategoryById);

module.exports = router;
