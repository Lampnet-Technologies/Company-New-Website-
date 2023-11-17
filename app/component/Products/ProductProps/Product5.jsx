import React from "react";
import classes from "./Product5.module.css";

const Product5 = (props) => {
  return (
    <div className={`${classes.Product5Main}`}>
      <div className={`container ${classes.Product5Pareent}`}>
        <h6>{props.header} </h6>
        <h2>{props.subheader}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Product5;
