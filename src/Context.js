import { useState, createContext } from "react";
import { storeProducts } from "./data";
const PhoneContext = createContext();

const PhoneProvider = (props) => {
  const [products, setProducts] = useState(storeProducts);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCart(product) {
    const id = product.id;
    let newItem = products.filter((item) => item.id === id);
    newItem = newItem[0];
    newItem.count = 1;
    newItem.inCart = true;
    newItem.total = newItem.price * newItem.count;
    setCart((prevState) => [...prevState, newItem]);

    addCartTotal();
  }
  function decrement(id) {
    let newItem = products.filter((item) => item.id === id);
    // let newCartItem = cart.filter((item) => item.id === id);
    newItem = newItem[0];
    newItem.count -= 1;
    newItem.inCart = true;
    newItem.total = newItem.price * newItem.count;
    // newCartItem = newCartItem[0];
    addCartTotal(cart);
    console.log(products);
    console.log();
  }
  function increment(id) {
    let newItem = products.filter((item) => item.id === id);
    // let newCartItem = cart.filter((item) => item.id === id);
    newItem = newItem[0];
    newItem.count += 1;
    newItem.total = newItem.price * newItem.count;
    // newCartItem = newCartItem[0];
    addCartTotal(cart);
    console.log(products);
    console.log();
  }
  function removeItem(id) {
    let newItem = products.filter((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    newItem = newItem[0];
    newItem.count = 0;
    newItem.total = 0;
    newItem.inCart = false;
    addCartTotal();
    console.log(products);
    console.log();
  }
  function addCartTotal() {
    let total = 0;
    cart.map((item) => {
      total = total + item.total;
    });
    console.log("total=" + total);
    console.log("cart=" + cart);
    setCartTotal(total);
  }
  return (
    <PhoneContext.Provider
      value={{
        products,
        cart,
        addToCart,
        decrement,
        increment,
        removeItem,
        cartTotal,
      }}
    >
      {props.children}
    </PhoneContext.Provider>
  );
};
export { PhoneContext, PhoneProvider };
