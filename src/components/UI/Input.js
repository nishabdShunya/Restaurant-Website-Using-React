import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="quantity-input">
      <label htmlFor={props.inputConfig.id}>{props.label}</label>
      <input {...props.inputConfig} />
    </div>
  );
};

export default Input;
