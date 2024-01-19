import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <button className="header-button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderButton;
