import React from "react";
import classes from "./Loading.module.css";

const page = () => {
  return (
    <div className={`container ${classes.ldsRing}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default page;
