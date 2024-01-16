// Write your code at relevant places in the code below:

import React from "react";

import "./MealItem.css";

const MealItem = (props) => {
  const price = `$${props.price}`;

  return (
    <div className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div></div>
    </div>
  );
};

export default MealItem;
