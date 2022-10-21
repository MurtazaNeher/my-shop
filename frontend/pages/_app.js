import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {});

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const addToCart = (item, qty,price) => {
    let newCart = cart;

    for (let i = 0; i < qty; i++) {
      newCart.push([item,price]);
     }
    setCart(newCart);
    setReloadKey(Math.random())
  };
  const removeFromCart = (item, qty) => {};
  const clearCart = (item) => {};
  return (
    <>
      {" "}
      <Navbar cart={cart} key={reloadKey} />{" "}
      <Component
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer/>
    </>
  );
}

export default MyApp;
