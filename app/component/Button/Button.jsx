import React from "react";
// import classes from "./Button.module.css";

function MyButton(props) {
  const buttonStyle = {
    backgroundColor: props.backgroundColor || "var(--Primary-color, #ab0e12)",
    color: props.color || "var(--white, #fff)",
    borderRadius: "4px",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "24px",
    padding: "0.5rem 1rem",
    border: props.border || "0px solid #ab0e12",
  };

  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default MyButton;
