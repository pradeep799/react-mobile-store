import React from "react";
import "../../App.css";

export default function CartHeader() {
  return (
    <div className="cart-grid">
      <div className="">
        <h4>Model</h4>
      </div>
      <div className="">
        <h4>Company</h4>
      </div>
      <div className="">
        <h4>Quantity</h4>
      </div>
      <div className="">
        <h4>Price</h4>
      </div>
      <div className="">
        <h4>Total</h4>
      </div>
      <div className="">
        <h4>Remove</h4>
      </div>
    </div>
  );
}
