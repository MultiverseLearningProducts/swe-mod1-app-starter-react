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
      <h2>My Cart</h2>
      <div>{cartItems.length === 0 && <h3>Oops, your cart is empty!</h3>}</div>
      {/* LIST OF ITEMS */}
      {cartItems.map((item) => (
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
          <Divider />
        </div>
      ))}

      {/* CHECKOUT */}

      {cartItems.length !== 0 && (
        <>
          <Divider />
          <div className="row">
            <div className="col-2">Items Price: ${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price: ${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              Shipping Price: ${shippingPrice.toFixed(2)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button
              aria-label="checkout"
              onClick={() => alert("Implement Checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
