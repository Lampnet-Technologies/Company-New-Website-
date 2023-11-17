import React from "react";
import MyButton from "../../Button/Button";
import Image from "next/image";
import classes from "./Product11.module.css";

const Product11 = (props) => {
  return (
    <div className={`container ${classes.Product11Main}`}>
      <div className={` ${classes.Product11Parent}`}>
        <h2> {props.subheader} </h2>
        <h6>{props.header} </h6>
        <p> {props.body} </p>
        <div className={classes.Product11Button}>
          <MyButton text={props.initial} />
        </div>
      </div>
      <div className={` ${classes.Product11Child}`}>
        <Image src={props.image} alt="" quality={100} />
      </div>
    </div>
  );
};

export default Product11;
