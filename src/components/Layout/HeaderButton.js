import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import "./HeaderButton.css";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce((total, item) => {
    return total + +item.quantity;
  }, 0);

  return (
    <button className="header-button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalQuantity}</span>
    </button>
  );
};

export default HeaderButton;
