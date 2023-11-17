import React from "react";
import classes from "./Service4.module.css";
import ServiceWrapper from "./ServiceWrapper";

const Service4 = () => {
  return (
    <div className={classes.Service4Main}>
      <div className={`container ${classes.Service4MainParent}`}>
        <div className={classes.Service4Parent}>
          <h6>Our Unique Approach</h6>
          <h2>
            How we provide our Startup Scale-up & MVP Development Services
          </h2>
        </div>

        <div>
          <ServiceWrapper />
        </div>
      </div>
    </div>
  );
};

export default Service4;
