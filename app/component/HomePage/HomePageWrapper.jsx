import React from "react";
import classes from "./HomePageWrapper.module.css";

const HomePageWrapper = ({ children }) => {
  return (
    <div className={classes.HomePageWrapperMain}>
      <div
        className={`d-flex flex-row justify-content-between  container ${classes.HomePageWrapperParent}`}
      >
        {children}
      </div>
    </div>
  );
};

export default HomePageWrapper;
