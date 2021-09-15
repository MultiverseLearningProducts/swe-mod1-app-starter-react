import React from "react";

export default function Navbar() {
  return (
    <navbar class="navbar">
      <div class="navbar-left">
        <h2 class="nav-item">
          <a href="#">Plants</a>
        </h2>
        <h2 class="nav-item">
          <a href="#">Coffee</a>
        </h2>
      </div>
      <div className="navbar-center">
        <h2 class="nav-item">
          <a href="#">Plant Shed</a>
        </h2>
      </div>
      <div class="navbar-right">
        <h2 class="nav-item">
          <a href="#">Cart</a>
        </h2>
      </div>
    </navbar>
  );
}
