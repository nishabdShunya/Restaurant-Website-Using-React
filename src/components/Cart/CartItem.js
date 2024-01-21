import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const handleMinusClick = () => {
    cartCtx.removeItem(props.id);
  };

  const handlePlusClick = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    });
  };

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
        <button onClick={handleMinusClick}>-</button>
        <button onClick={handlePlusClick}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
