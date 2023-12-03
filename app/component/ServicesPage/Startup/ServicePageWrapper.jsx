import React from "react";
import classes from "./ServicePageWrapper.module.css";

const ServicePageWrapper = ({ children }) => {
  return (
    <div
      className={`d-flex flex-row justify-content-between  container ${classes.ServicePageWrapperMain} `}
    >
      {children}
    </div>
  );
};

export default ServicePageWrapper;
