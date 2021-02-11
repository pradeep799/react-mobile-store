import React, { useContext } from "react";
import { PhoneContext } from "../Context";
import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartTotal from "../components/cart/CartTotal";
import Title from "../components/Title";

export default function CartPage() {
  const { cart } = useContext(PhoneContext);
  return (
    <div className="cart__container container">
      <Title title="Your Cart" />
      <CartHeader />
      {cart.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
      {/* <CartTotal /> */}
    </div>
  );
}
