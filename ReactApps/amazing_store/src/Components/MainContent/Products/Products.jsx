import React from "react";
import "../Products/Products.css";
import "../../Produs/Produs";
import Produs from "../../Produs/Produs";
const Products = props => {
  return (
    <div className="products">
      {props.products.map((products, index) => {
        return (
          <Produs
            poza={products.poza}
            descriere={products.descriere}
            pret={products.pret}
          />
        );
      })}
    </div>
  );
};
export default Products;
