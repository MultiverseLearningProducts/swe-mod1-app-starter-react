import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-left" aria-label="shopping tabs">
        <h2 className="nav-item">
          <Link to="/plants">Plants</Link>
        </h2>
        <h2 className="nav-item">
          <Link to="/coffees">Coffee</Link>
        </h2>
      </section>
      <section className="navbar-center" aria-label="home tab">
        <h2 className="nav-item">
          <Link to="/home">Plant Shed</Link>
        </h2>
      </section>
      <section className="navbar-right" aria-label="cart tab">
        <h2 className="nav-item">
          <a href="#">Cart</a>
        </h2>
      </section>
    </nav>
  );
}
