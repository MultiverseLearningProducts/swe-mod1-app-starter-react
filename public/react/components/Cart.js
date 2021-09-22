import React from "react";
import Divider from "@mui/material/Divider";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 12;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="cart-container">
      <div className="cart-header-container">
        <h3>SHOPPING CART</h3>
      </div>
      <Divider />
      <div>{cartItems.length === 0 && <h3>Oops, your cart is empty!</h3>}</div>
      {/* LIST OF ITEMS */}
      {cartItems.map((item) => (
        <>
          <div className="cart-item-container" key={item.id}>
            <section className="cart-item-left">
              <img className="cart-item-img" alt={item.name} src={item.image} />
            </section>
            <section className="cart-item-right">
              <p className="cart-item-name">{item.name}</p>
              <div className="cart-item-buttons">
                <button
                  aria-label="Increase Item Quantity"
                  onClick={() => onAdd(item)}
                  className="inc-qty"
                >
                  +
                </button>
                <button
                  aria-label="Decrease Item Quantity"
                  onClick={() => onRemove(item)}
                  className="dec-qty"
                >
                  -
                </button>
              </div>
              <p>QTY: {item.qty}</p>
              <p>${item.qty * item.price}</p>
            </section>
          </div>
          <Divider />
        </>
      ))}

      {/* CHECKOUT */}

      {cartItems.length !== 0 && (
        <>
          <div className="cart-total-container"></div>
          <div className="price-row">
            <div className="price-left">Items Price:</div>
            <div className="price-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="price-row">
            <div className="price-left">Tax Price:</div>
            <div className="price-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="price-row">
            <div className="price-left">Shipping Price:</div>
            <div className="price-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <Divider />

          <div className="price-row">
            <div className="price-left">
              <strong>Total Price:</strong>
            </div>
            <div className="price-right">
              <strong id="total-price">${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="checkout-container">
            <button
              id="checkout-btn"
              aria-label="checkout"
              onClick={() => alert("Implement Checkout")}
            >
              CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
}
