import React from "react";
import Service6Carouse from "../../Carousel/Service6Carouse";
import Clock from "../../../../public/images/Clock.svg";
import classes from "./Service6Props.module.css";

const Service6Props = (props) => {
  return (
    <div className={`container ${classes.Service6GrandMain}`}>
      <div className={classes.Service6Main}>
        <h6>{props.header} </h6>
        <h2>{props.subHeader}</h2>
        <p>{props.paragraph}</p>
      </div>  

      <div>
        <Service6Carouse data={props.data} />
      </div>
    </div>
  );
};

export default Service6Props;
