import React, { useContext } from "react";
import { PhoneContext } from "../Context";
import Product from "./Product";
import Title from "./Title";
import "../App.css";

export default function Featured() {
  const { products } = useContext(PhoneContext);
  return (
    <section className="featured">
      <div className="container">
        <Title title="Featured Mobiles" />
        <div className="products__container">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
