import React from "react";
import classes from "./component/Loading/Loading.module.css";

const Loading = () => {
  return (
    <div className={`container ${classes.ldsRing}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;

// use this code on any page where you're using data or fetching data...and this component will load: await new Promise(resolve =>setTimeout(resolve, 3000))
