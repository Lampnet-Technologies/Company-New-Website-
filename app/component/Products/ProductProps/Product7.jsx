import React from "react";
import classes from "./Product7.module.css";
import MyButton from "../../Button/Button";
import ButtonThree from "../../Button/ButtonThree";

const Product7 = ({
  background,
  header,
  subheader,
  initial,
  initial1,
  backgroundColor,
  color,
  border,
  color2,
  background2,
}) => {
  const backgroundStyle = {
    background: background,
    padding: "3rem 0",
  };

  return (
    <div style={backgroundStyle} className={`${classes.Product7Main}`}>
      <div className={`container ${classes.Product7Parent}`}>
        <h6> {header} </h6>
        <h2>{subheader} </h2>
        <div className={`${classes.Product7Child}`}>
          <div className={classes.Product7Bro}>
            <MyButton
              text={initial}
              backgroundColor={backgroundColor}
              color={color}
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>

          <div className={classes.Product7Sis}>
            <ButtonThree
              text={initial1}
              border={border}
              color={color2}
              background={background2}
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product7;
