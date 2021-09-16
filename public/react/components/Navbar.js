import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="nav-item">
          <a href="#">Plants</a>
        </h2>
        <h2 className="nav-item">
          <a href="#">Coffee</a>
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
