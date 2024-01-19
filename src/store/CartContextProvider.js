import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((existingItem) => {
        return existingItem.id === item.id;
      });
      if (existingItemIndex !== -1) {
        const existingItem = prevItems[existingItemIndex];
        const updatedExistingItem = {
          ...existingItem,
          quantity: +existingItem.quantity + +item.quantity,
        };
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedExistingItem;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
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
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
