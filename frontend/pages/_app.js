import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
 
  useEffect(() => {});

  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  const addToCart = (item, title, price) => {
    let newCart = cart;
    newCart.push([item, title, price]);
  
    // if(search(newCart[0][0],cart[0][0])){
    if(cart.find(x => x[0] == newCart[0][0])){
      
    }else{
      setCart(newCart);
      setReloadKey(Math.random());
    }
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
      <Footer />
    </>
  );
}

export default MyApp;
