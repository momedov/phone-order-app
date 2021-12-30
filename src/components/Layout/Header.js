import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import mfImage from "../../assets/mf_logo.png";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Интернет-магазин</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mfImage} alt="Table of Food" />
      </div>
    </Fragment>
  );
};
export default Header;
