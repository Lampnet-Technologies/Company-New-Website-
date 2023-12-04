import React from "react";
// import classes from "./ButtonThree.module.css";

const ButtonThree = (props) => {
  const buttonStyle = {
    borderRadius: "4px",
    border: props.border || "1px solid var(--Primary-color, #ab0e12)",
    color: props.color || "var(--Primary-color, #ab0e12)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    background: props.background || "#fff",
    padding: "0.5rem 1.5rem",
  };
  return (
    // <div className={classes.ButtonThreeMain}>
    <button style={buttonStyle}> {props.text} </button>
    // </div>
  );
};

export default ButtonThree;
