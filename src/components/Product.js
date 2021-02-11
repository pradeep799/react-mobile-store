import React, { useContext } from "react";
import { PhoneContext } from "../Context";
import { Link } from "react-router-dom";
import "../App.css";

export default function Product(props) {
  const { addToCart } = useContext(PhoneContext);
  const { product } = props;
  console.log(product.img);
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.img} alt="mnjijij" />
      </div>
      <div className="card-content container">
        <h5>{product.title}</h5>
        <p>${product.price}</p>
      </div>
      <div className="card-action container">
        <Link to={"/store/" + product.id} className="btn">
          View
        </Link>
        {product.inCart ? (
          <button className="btn">InCart</button>
        ) : (
          <button onClick={() => addToCart(product)} className="btn">
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
