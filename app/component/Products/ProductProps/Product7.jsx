import React from "react";
import classes from "./Product7.module.css";
import MyButton from "../../Button/Button";
import ButtonThree from "../../Button/ButtonThree";

const Product7 = (props) => {
  return (
    <div className={`${classes.Product7Main}`}>
      <div className={`container ${classes.Product7Parent}`}>
        <h6> {props.header} </h6>
        <h2>{props.subheader} </h2>
        <div className={`${classes.Product7Child}`}>
          <div className= {classes.Product7Bro}>
            <MyButton text={props.initial} />
          </div>

          <div className= {classes.Product7Sis}>
            <ButtonThree text={props.initial1} />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Product7;
