import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-item">
          <h3>FOLLOW US</h3>
          <ul aria-label='Follow Us Links'>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-item">
          <h3>ABOUT</h3>
          <ul aria-label='About Links'>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Store Locations</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>SUPPORT</h3>
          <ul aria-label='Support Links'>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">Delivery & Returns</a>
            </li>
            <li>
              <a href="#">Investors Site</a>
            </li>
          </ul>
        </div>
        <div className="footer-item">
          <h3>SHIPPING</h3>
          <ul aria-label="Shipping Links">
            <li>
              <a href="#" >Help Center</a>
            </li>
            <li>
              <a href="#">Store Locations</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-item">
          <h3 aria-label='Subscribe'>SUBSCRIBE</h3>
        </div>
      </div>
    </footer>
  );
}
