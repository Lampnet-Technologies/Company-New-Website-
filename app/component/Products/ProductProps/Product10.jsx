import React from "react";
import classes from "./Product10.module.css";

const Product10 = ({ header, subheader, body, color }) => {
  const h6Style = {
    color: color,
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px" /* 120% */,
  };
  return (
    <div className={`container ${classes.Product9Main}`}>
      <h6 style={h6Style}> {header} </h6>
      <h2> {subheader} </h2>
      <p> {body} </p>
    </div>
  );
};

export default Product10;
