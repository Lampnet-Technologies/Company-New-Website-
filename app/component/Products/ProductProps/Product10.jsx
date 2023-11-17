import React from "react";
import classes from "./Product10.module.css";

const Product10 = (props) => {
  return (
    <div className={`container ${classes.Product9Main}`}>
      <h6> {props.header} </h6>
      <h2> {props.subheader} </h2>
      <p> {props.body} </p>
    </div>
  );
};

export default Product10;
