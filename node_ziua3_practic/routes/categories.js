const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategoriesById
} = require("../controllers/categories");

const { deleteProductsFromCategoryById } = require("../controllers/products");

router.get("/categories", getCategories);
router.get("/categories/:id", getCategoriesById);
// router.get("/categories/:id/products", getProductsFromCategoryById);

router.delete("/categories/:id/products", deleteProductsFromCategoryById);

module.exports = router;
