import React from "react";
import classes from "../Startup/Service4.module.css";
import ApiServiceWrapper from "./ApiServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Api4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our API Development & Integration Services
          </h2>
        </div>

        <div>
          <ApiServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Api4;
