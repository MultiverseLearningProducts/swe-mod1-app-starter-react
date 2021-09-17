import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="nav-item">
          <Link to="/plants">Plants</Link>
        </h2>
        <h2 className="nav-item">
        <Link to="/coffees">Coffee</Link>
        </h2>
      </div>
      <div className="navbar-center">
        <h2 className="nav-item">
          <a href="#">Plant Shed</a>
        </h2>
      </div>
      <div className="navbar-right">
        <h2 className="nav-item">
          <a href="#">Cart</a>
        </h2>
      </div>
    </nav>
  );
}
