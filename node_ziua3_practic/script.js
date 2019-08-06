const express = require("express");
const http = require("http");
const products = require("./products.json");
const categories = require("./categories.json");

const router = express.Router();
const app = express();

router.get("/products/:id", (req, res) => {
  let elementFound = false;
  products.forEach(idElement => {
    let x = idElement.id;
    if (parseInt(req.params.id) === x) {
      res.status(200).json(idElement);
      elementFound = true;
      return;
    }
  });
  if (!elementFound) {
    res.status(404).json({ errors: "Product not found" });
  }
  return;
});

router.get("/products/", (req, res) => {
  res.status(200).json(products);
  return;
});
router.get("/categories/", (req, res) => {
  res.status(200).json(categories);
  return;
});
router.get("/", (req, res) => {
  res.status(200).json("wrong url");
});
router.get("*", (req, res) => {
  res.end("Wrong url");
});
app.use("/", router);
const server = http.createServer(app);
server.listen(5000);
