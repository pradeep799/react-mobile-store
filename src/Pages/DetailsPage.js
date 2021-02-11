import React, { useContext } from "react";
import { PhoneContext } from "../Context";
import { useParams } from "react-router-dom";
import "../App.css";
import logo from "../product-1.png";

export default function DetailsPage() {
  const { id } = useParams();
  const { products, addToCart } = useContext(PhoneContext);
  let product = products.filter((item) => item.id == id);
  product = product[0];
  console.log(product.img);

  return (
    <section className="details">
      <div className="container">
        <div className="grid-container">
          <div className="image">
            <img src={"../" + product.img} alt="oiojmij" />
          </div>
          <div className="product__details">
            <h1>{product.title}</h1>
            <h4>{product.company}</h4>
            <h4>${product.price}</h4>
            {product.inCart ? (
              <button className="btn">InCart</button>
            ) : (
              <button onClick={() => addToCart(product)} className="btn">
                Add to cart
              </button>
            )}
          </div>
        </div>
        <p className="container">{product.info}</p>
      </div>
    </section>
  );
}
