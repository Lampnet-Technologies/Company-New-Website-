import React from "react";
import Image from "next/image";
import classes from "./About1.module.css";
import AboutImage from "../../../public/images/AboutImage.svg";

const About1 = () => {
  return (
    <div className={classes.About1Main}>
      <div className={`container ${classes.About1Parent}`}>
        <div className={`${classes.About1Child}`}>
          <h1> About Us </h1>
        </div>
        <Image src={AboutImage} alt="" quality={100} width={300} />
      </div>
    </div>
  );
};

export default About1;
