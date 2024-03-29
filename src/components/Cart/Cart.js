import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items;

  const totalAmount = cartItems.reduce((total, item) => {
    return total + +item.quantity * +item.price;
  }, 0);

  return (
    <Modal onBackdropClick={props.onCloseCart}>
      <ul className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          );
        })}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
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
