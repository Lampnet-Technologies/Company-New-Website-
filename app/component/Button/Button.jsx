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
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      onClick={props.onClick}
      type={props.type}
      className={props.className} // Add className prop
      data-bs-toggle={props["data-bs-toggle"]} // Add data-bs-toggle prop
      data-bs-target={props["data-bs-target"]} // Add data-bs-target prop
    >
      {props.text}
    </button>
  );
}

export default MyButton;
