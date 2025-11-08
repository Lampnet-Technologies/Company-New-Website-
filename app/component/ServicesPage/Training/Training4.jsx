import React from "react";
import classes from "../Startup/Service4.module.css";
import TrainingServiceWrapper from "./TrainingServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Training4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our Training & IT Consulting Services
          </h2>
        </div>

        <div>
          <TrainingServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Training4;
