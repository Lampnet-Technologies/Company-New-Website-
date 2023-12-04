import React from "react";
import classes from "./Product5.module.css";

const Product5 = (props) => {
  const { textColor, header, subheader, body } = props;

  const h6Style = {
    color: textColor,
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px" /* 120% */,
  };
  return (
    <div className={`${classes.Product5Main}`}>
      <div className={`container ${classes.Product5Pareent}`}>
        <h6 style={h6Style}>{header} </h6>
        <h2>{subheader}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Product5;
