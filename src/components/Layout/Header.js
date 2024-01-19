import React, { Fragment } from "react";
import HeaderButton from "./HeaderButton";
import mealsImage from "../../assets/meals.jpg";
import "./Header.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onOpenCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
