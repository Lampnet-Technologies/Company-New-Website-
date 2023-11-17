import React from "react";
import classes from "./Product9Wrapper.module.css";

const Product9Wrapper = ({ children, backgroundColor }) => {
  const wrapperStyle = {
    backgroundColor: backgroundColor || "#fff",
  };
  return (
    <div style={wrapperStyle}>
      <div
        className={`d-flex flex-row justify-content-between container ${classes.Product9WrapperMain} `}
      >
        {children}
      </div>  
    </div>
  );
};

export default Product9Wrapper;
