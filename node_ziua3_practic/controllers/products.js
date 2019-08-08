const products = require("../src/products.json");

const getProducts = (req, res) => {
  res.status(200).json(products);
};

const getProductsById = (req, res) => {
  res.status(200).json(
    products.filter(product => {
      return product.id == req.params.id;
    })
  );
};

const deleteProductsFromCategoryById = (req, res) => {
  // res.status(200).json(
  //   products.filter(product => {
  //     return product.categories.includes(req.params.id);
  //   })
  // );

  const exist = products.filter(product => {
    return product.categories.includes(req.params.id);
  });

  if (exist.lenght === 0) {
    res.status(404).json({ err: "produsul nu exista" });
  } else {
    res.status(200).json({ message: "Product deleted" });
  }
};

module.exports = {
  getProducts,
  getProductsById,
  deleteProductsFromCategoryById
};
