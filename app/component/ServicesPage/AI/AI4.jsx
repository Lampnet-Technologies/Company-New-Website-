import React from "react";
import classes from "../Startup/Service4.module.css";
import AIServiceWrapper from "./AIServiceWrapper";
import AccordionService from "../../AccordionService/page";

const AI4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our Artifical Intelligence Development Services
          </h2>
        </div>

        <div>
          <AIServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default AI4;
