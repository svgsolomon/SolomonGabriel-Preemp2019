const express = require("express");
const router = express.Router();
const { getProducts, getProductsById } = require("../controllers/products");

router.get("/products", getProducts);

router.get("/products/:id", getProductsById);

module.exports = router;
