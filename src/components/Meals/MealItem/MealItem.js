import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import "./MealItem.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;

  const addItemHandler = (quantity) => {
    cartCtx.addItem({ ...props, quantity: quantity });
  };

  return (
    <div className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddItem={addItemHandler} />
      </div>
    </div>
  );
};

export default MealItem;
