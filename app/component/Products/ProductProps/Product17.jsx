import React from "react";
import MyButton from "../../Button/Button";
import classes from "./Product17.module.css";

const Product17 = (props) => {
  return (
    <div>
      <div className={`container ${classes.Product17Main}`}>
        <h2> {props.body} </h2>
        <div className={`${classes.Product17Parent}`}>
          <div className={classes.Product17Child}>
            <MyButton text={props.initial} />
          </div>
          <div className={classes.Product17Child2}>
            <MyButton text={props.initial2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product17;
