import React, { useContext, useState } from "react";
import { PhoneContext } from "../../Context";
import "../../App.css";

export default function CartTotal() {
  const { cartTotal } = useContext(PhoneContext);

  return <div>{cartTotal}</div>;
}
