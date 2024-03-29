import React from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("quantity_" + props.id).value;
    props.onAddItem(quantity);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        label="Quantity"
        inputConfig={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
