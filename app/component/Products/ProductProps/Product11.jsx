import React from "react";
import MyButton from "../../Button/Button";
import Image from "next/image";
import classes from "./Product11.module.css";

const Product11 = ({
  image,
  subheader,
  header,
  body,
  backgroundColor,
  border,
  initial,
}) => {
  return (
    <div className={`container ${classes.Product11Main}`}>
      <div className={` ${classes.Product11ChildMobile}`}>
        <Image src={image} alt="" quality={100} />
      </div>
      <div className={` ${classes.Product11Parent}`}>
        <h2> {subheader} </h2>
        <h6>{header} </h6>
        <p> {body} </p>
        <div className={classes.Product11Button}>
          <MyButton
            text={initial}
            backgroundColor={backgroundColor}
            border={border}
          />
        </div>
      </div>
      <div className={` ${classes.Product11Child}`}>
        <Image src={image} alt="" quality={100} />
      </div>
    </div>
  );
};

export default Product11;
