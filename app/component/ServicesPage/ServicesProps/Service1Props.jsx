import React from "react";
import classes from "./Service1Props.module.css";
import Image from "next/image";

const Service1Props = (props) => {
  return (
    <div className={classes.Service1main}>
      <div className={`container ${classes.Service1Parent}`}>
        <h1>{props.header} </h1>
        <div className={classes.Service1ParentImgWeb}>
          <Image src={props.AboutImage} alt="" quality={100} width={300} />
        </div>
      </div>
    </div>
  );
};

export default Service1Props;
