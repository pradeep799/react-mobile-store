import React, { useContext, useState } from "react";
import { PhoneContext } from "../../Context";
import "../../App.css";

export default function CartItem({ item }) {
  console.log("hello");
  const id = item.id;
  const { products, decrement, increment, removeItem } = useContext(
    PhoneContext
  );
  let product = products.filter((item) => item.id == id);
  const { title, company, price, count, total } = product[0];
  const [counter, setCounter] = useState(count);
  const handleIncrement = () => {
    if (counter > 0 && counter < 10) {
      increment(id);
      setCounter(counter + 1);
    }
  };
  const handleDecrement = () => {
    if (counter > 1 && counter <= 10) {
      decrement(id);
      setCounter(counter - 1);
    }
  };

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="cart-grid">
      <div className="">
        <p>{title}</p>
      </div>
      <div className="">
        <p>{company}</p>
      </div>
      <div className="">
        <p>
          <button
            onClick={() => {
              handleDecrement();

              console.log("hello");
            }}
          >
            -
          </button>
          {counter}
          <button
            onClick={() => {
              handleIncrement();

              console.log("hello");
            }}
          >
            +
          </button>
        </p>
      </div>
      <div className="">
        <p>${price}</p>
      </div>
      <div className="">
        <p>${total}</p>
      </div>
      <div className="">
        <button className="btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
