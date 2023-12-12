import React from "react";
import classes from "./HomePageWrapper.module.css";

const HomePageWrapper = ({ children }) => {
  return (
    <div className={`${classes.HomePageWrapperHeader} `}>
      <div className={` container ${classes.HomePageWrapperMain}`}>
        {children}
      </div>
    </div>
  );
};

export default HomePageWrapper;
