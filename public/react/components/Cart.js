import React from "react";

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
      <div>
        {cartItems.length === 0 && <div>Oops, your cart is empty!</div>}
      </div>
      {/* LIST OF ITEMS */}
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div className="cart-item-buttons">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div>
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}

      {/* CHECKOUT */}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
