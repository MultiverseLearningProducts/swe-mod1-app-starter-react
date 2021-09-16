import React, { useState, useEffect } from "react";
import { ItemContainer } from "./ItemContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";

export const App = () => {
  const [plants, setPlants] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      //remove product from cartItems
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  async function fetchPlants() {
    try {
      const response = await fetch("http://localhost:3000/plants");
      const responseJSON = await response.json();
      setPlants(responseJSON);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
      <ItemContainer onAdd={onAdd} items={plants}></ItemContainer>
      <Footer></Footer>
    </div>
  );
};
