import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="cart-item-summary">
          <span className="cart-item-price">$ {props.price}</span>
          <span className="cart-item-quantity">x {props.quantity}</span>
        </div>
      </div>
      <div className="cart-item-actions">
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
