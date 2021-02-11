import React, { useContext } from "react";
import { PhoneContext } from "../Context";
import Product from "../components/Product";
import Title from "../components/Title";
import "../App.css";

export default function StorePage() {
  const { products } = useContext(PhoneContext);

  return (
    <section className="store">
      <div className="container">
        <Title title="Mobile Store" />

        <div className="products__container">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}
