import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((existingItem) => {
        return existingItem.id === item.id;
      });
      if (existingItemIndex !== -1) {
        const existingItem = prevItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity + +item.quantity,
        };
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((existingItem) => {
        return existingItem.id === id;
      });
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;
      if (+existingItem.quantity === 1) {
        updatedItems = prevItems.filter((item) => {
          return item.id !== id;
        });
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: +existingItem.quantity - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return updatedItems;
    });
  };

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
