const express = require("express");
const categoriesRoute = require("../node_ziua3_practic/routes/categories");
const productsRoute = require("../node_ziua3_practic/routes/products");

const bodyparse = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use("/", categoriesRoute);
app.use("/", productsRoute);
module.exports = app;
