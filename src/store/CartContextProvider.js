import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const removeItemFromCart = (id) => {};

  const cartContextObject = {
    items: items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextObject}>
      {console.log(items)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
