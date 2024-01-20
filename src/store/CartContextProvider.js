import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContextObject = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
