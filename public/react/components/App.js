import React, { useState, useEffect } from "react";
import { ItemContainer } from "./ItemContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import SingleItemContainer from "./SingleItemContainer";
import PaymentForm from "./PaymentForm";
import { FavoritesContainer } from "./FavoritesContainer";

export const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [plants, setPlants] = useState([]);
  const [coffees, setCoffees] = useState([]);

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

  // Function to favorite products
  const onFav = (product) => {
    const exist = favItems.find((x) => x.id === product.id);
    if (exist) {
      setFavItems([...favItems]);
    } else {
      setFavItems([...favItems, { ...product }]);
    }
  };

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");
      const responseJSON = await response.json();
      console.log(responseJSON);
      let tempPlant = [];
      let tempCoffee = [];
      for (let i = 0; i < responseJSON.length; i++) {
        if (responseJSON[i].type == "plant") {
          tempPlant = [...tempPlant, responseJSON[i]];
        } else if (responseJSON[i].type == "coffee") {
          tempCoffee = [...tempCoffee, responseJSON[i]];
        }
      }

      setPlants(tempPlant);
      setCoffees(tempCoffee);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Navbar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Navbar>

      <Switch>
        <Route path="/plants">
          <ItemContainer
            onAdd={onAdd}
            onFav={onFav}
            items={plants}
          ></ItemContainer>
        </Route>
        <Route path="/coffees">
          <ItemContainer
            onAdd={onAdd}
            onFav={onFav}
            items={coffees}
          ></ItemContainer>
        </Route>
        <Route path="/favorites">
          <FavoritesContainer
            onAdd={onAdd}
            onFav={onFav}
            favItems={favItems}
          ></FavoritesContainer>
        </Route>
        <Route path="/plant/:id">
          <SingleItemContainer onAdd={onAdd}></SingleItemContainer>
        </Route>
        <Route path="/coffee/:id">
          <SingleItemContainer onAdd={onAdd}></SingleItemContainer>
        </Route>
        <Route path="/form">
          <PaymentForm
            cartItems={cartItems}
            setCartItems={setCartItems}
          ></PaymentForm>
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};
