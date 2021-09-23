import React from "react";
import { Link } from "react-router-dom";
import CartSideBar from "./CartSideBar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export default function Navbar(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <nav className="navbar">
      <section className="navbar-left" aria-label="shopping tabs">
        <h3 className="nav-item">
          <Link to="/home">Home</Link>
        </h3>
        <h3 className="nav-item">
          <Link to="/plants">Plants</Link>
        </h3>
        <h3 className="nav-item">
          <Link to="/coffees">Coffee Beans</Link>
        </h3>
        <h3 className="nav-item">
          <Link to="/about">Our Story</Link>
        </h3>
      </section>
      <section className="navbar-center" aria-label="home tab">
        <h2 className="nav-item">
          <Link to="/home">Plant Shed</Link>
        </h2>
      </section>
      <section className="navbar-right" aria-label="cart tab">
        <h3 className="nav-item">
          <Link to="/about">Log In</Link>
        </h3>
        <h2 className="nav-item">
          <CartSideBar
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></CartSideBar>
        </h2>
      </section>
    </nav>
  );
}
