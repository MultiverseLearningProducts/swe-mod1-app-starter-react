import React, { useState, useEffect } from "react";
import { ItemContainer } from "./ItemContainer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";
import {
	Route,
  Switch
} from "react-router-dom";
import SingleItemContainer from "./SingleItemContainer";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [plants,setPlants]=useState([]);
  const [coffees,setCoffees]=useState([]);

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

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:3000/products");
      const responseJSON = await response.json();
      console.log (responseJSON);
      let tempPlant=[];
      let tempCoffee=[];
     for( let i = 0; i < responseJSON.length; i++){
          if (responseJSON[i].type =="plant") {
            tempPlant=[...tempPlant,responseJSON[i]];
            }
          else if (responseJSON[i].type =="coffee") {
            tempCoffee=[...tempCoffee, responseJSON[i]]    
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
          <Navbar></Navbar>
            <Switch>
                <Route path="/plants">
                  <ItemContainer onAdd={onAdd} items={plants} ></ItemContainer>
                </Route>
                <Route path="/coffees">
                  <ItemContainer onAdd={onAdd} items={coffees} ></ItemContainer>
                </Route>
                <Route path="/plant/:id">
                  <SingleItemContainer onAdd={onAdd} ></SingleItemContainer>
                </Route>
              </Switch>
            <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Cart>
            
          <Footer></Footer>
        </div>
  );
};
