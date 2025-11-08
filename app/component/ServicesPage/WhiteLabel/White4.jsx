import React from "react";
import classes from "../Startup/Service4.module.css";
import WhiteServiceWrapper from "./WhiteServiceWrapper";
import AccordionService from "../../AccordionService/page";

const White4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our White Label App Customization Services
          </h2>
        </div>

        <div>
          <WhiteServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default White4;
