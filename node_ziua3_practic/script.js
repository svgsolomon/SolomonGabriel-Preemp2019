const express = require("express");
const products = require("./products.json");
const categories = require("./categories.json");
const https = require("https");
const fs = require("fs");
const { getProductByIDPROD } = require("./Middleware/productID");

const router = express.Router();
const app = express();
const server = https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(5000);

const validatePathParams = schema => (req, res, next) => {
  const result = schema.validate(req.params);
  if (result.error === null) next();
  else res.status(400).json({});
};

router.get(
  "/products/:id",
  validatePathParams(getProductByIDPROD),
  (req, res) => {
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
  }
);

// router.get("/products/:id", (req, res) => {
//   let elementFound = false;
//   products.forEach(idElement => {
//     let x = idElement.id;
//     if (parseInt(req.params.id) === x) {
//       res.status(200).json(idElement);
//       elementFound = true;
//       return;
//     }
//   });
//   if (!elementFound) {
//     res.status(404).json({ errors: "Product not found" });
//   }
//   return;
// });
router.get("/products/:id", (req, res) => {
  validatePathParams(getProductByIDPROD);
});
router.get("/products/:id", validatePathParams(getProductByIDPROD));

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
app.use(errorHandler);
