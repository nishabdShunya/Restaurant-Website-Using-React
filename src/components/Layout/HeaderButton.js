import React from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";

const HeaderButton = () => {
  return (
    <button className="header-button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderButton;