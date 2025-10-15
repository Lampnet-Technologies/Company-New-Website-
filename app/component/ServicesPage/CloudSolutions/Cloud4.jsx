import React from "react";
import classes from "../Startup/Service4.module.css";
import CloudServiceWrapper from "./CloudServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Cloud4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our Cloud Solutions & Management Services
          </h2>
        </div>

        <div>
          <CloudServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Cloud4;
