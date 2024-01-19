import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", quantity: 1, price: 12.99 }];

  return (
    <Modal onBackdropClick={props.onCloseCart}>
      <ul className="cart-items">
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="close-btn" onClick={props.onCloseCart}>
          Close
        </button>
        <button className="order-btn">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
