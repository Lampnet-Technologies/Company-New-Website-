import React from "react";
import classes from "./Service2Props.module.css";

const Service2Props = (props) => {
  return (
    <div className={`container ${classes.Service2GrandMain}`}>
      <div className={classes.Service2Main}>
        <h6>{props.header} </h6>
        <h2>{props.subheader}</h2>
        <p>{props.paragraph}</p>
        <p> {props.paragraph2}</p>
      </div>
    </div>
  );
};

export default Service2Props;
