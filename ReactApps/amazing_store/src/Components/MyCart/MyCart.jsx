import React from "react";
import "../MyCart/MyCart.css";
const MyCart = () => {
  return (
    <a href="/">
      <div className="myCart">
        <i className="fas fa-cart-plus cart-icon" />
        <div className="myCart-text">My Cart</div>
        <div className="count"> 12 </div>
      </div>
    </a>
  );
};
export default MyCart;
