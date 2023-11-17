import React from "react";
// import classes from "./Button.module.css";

function MyButton(props) {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || "var(--Primary-color, #ab0e12)",
    color: "var(--white, #fff)",
    borderRadius: "4px",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    padding: "0.5rem 1rem",
    border: "0px solid #ab0e12",
  };

  // const buttonStyle = {
  //   backgroundColor: props.backgroundColor || "defaultButtonColor",
  // };
  return (
    // <div className={classes.ButtonMain}>
    <button style={buttonStyle}>{props.text}</button>
    // </div>
  );
}

export default MyButton;
