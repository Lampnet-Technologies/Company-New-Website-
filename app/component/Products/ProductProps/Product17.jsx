import React from "react";
import MyButton from "../../Button/Button";
import classes from "./Product17.module.css";

const Product17 = ({
  body,
  initial,
  initial2,
  backgroundColor,
  border,
  backgroundColor2,
  border2,
  background,
  color,
}) => {
  const backgroundStyle = {
    background: background,
  };
  return (
    <div>
      <div
        style={backgroundStyle}
        className={`container ${classes.Product17Main}`}
      >
        <h2> {body} </h2>
        <div className={`${classes.Product17Parent}`}>
          <div className={classes.Product17Child}>
            <MyButton
              text={initial}
              backgroundColor={backgroundColor}
              border={border}
            />
          </div>
          <div className={classes.Product17Child2}>
            <MyButton
              text={initial2}
              border={border2}
              backgroundColor={backgroundColor2}
              color={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product17;
