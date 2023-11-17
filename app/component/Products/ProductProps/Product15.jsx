import React from "react";
import classes from "./Product15.module.css";
import Image from "next/image";

const Product15 = (props) => {
  return (
    <div className={`container ${classes.Product15Main}`}>
      <div className={` ${classes.Product15Child}`}>
        <Image src={props.image} alt="" quality={100} width={400} />
      </div>
      <div className={` ${classes.Product15Parent}`}>
        <h6>{props.header} </h6>
        <h2>{props.subheader} </h2>
        <p> {props.body} </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body1}{" "}
        </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body2}{" "}
        </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body3}{" "}
        </p>
      </div>
    </div>
  );
};

export default Product15;
