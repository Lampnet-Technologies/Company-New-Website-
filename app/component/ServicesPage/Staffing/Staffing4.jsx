import React from "react";
import classes from "../Startup/Service4.module.css";
import StaffingServiceWrapper from "./StaffingServiceWrapper";
import AccordionService from "../../AccordionService/page";

const Staffing4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our IT Staff Outsourcing & Team Augmentation Services
          </h2>
        </div>

        <div>
          <StaffingServiceWrapper />
          <AccordionService />
        </div>
      </div>
    </div>
  );
};

export default Staffing4;
