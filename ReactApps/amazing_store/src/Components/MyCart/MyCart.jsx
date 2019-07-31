import React from "react";
import "../MyCart/MyCart.css";
const MyCart = () => {
  return (
    <button
      type="button"
      onClick={() => console.log("ceva")}
      className="myCart"
    >
      <i className="fas fa-cart-plus cart-icon" />
      <div className="myCart-text">My Cart</div>
      <div className="count"> 12 </div>
    </button>
  );
};
export default MyCart;
