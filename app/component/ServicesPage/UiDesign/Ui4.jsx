import React from "react";
import classes from "../Startup/Service4.module.css";
import UiServiceWrapper from "./UiServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Ui4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our UI/UX Design Services
          </h2>
        </div>

        <div>
          <UiServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Ui4;
