import React from "react";
import classes from "../Startup/Service4.module.css";
import SoftwareServiceWrapper from "./SoftwareServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Software4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our Software Product Development Services
          </h2>
        </div>

        <div>
          <SoftwareServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Software4;
