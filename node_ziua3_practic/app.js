const express = require("express");
const categoriesRoute = require("../node_ziua3_practic/routes/categories");
const productsRoute = require("../node_ziua3_practic/routes/products");

const bodyparse = require("body-parser");
const cors = require("cors");
const app = express();

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparse.json());

app.use("/", categoriesRoute);
app.use("/", productsRoute);
module.exports = app;
