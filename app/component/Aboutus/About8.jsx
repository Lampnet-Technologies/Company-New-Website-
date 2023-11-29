"use client";
import React, { useState } from "react";
import Image from "next/image";
import HomePage7Image from "../../../public/images/HomePage7.svg";
import Button from "../Button/Button";
import classes from "./About8.module.css";

const About8 = () => {
  const [learn, setLearn] = useState("Partner with us");
  return (
    <div className={`container ${classes.About8Main}`}>
      <div className={classes.About8Parent}>
        <div className={classes.About8Image}>
          <Image src={HomePage7Image} alt="" quality={100} width={500} />
        </div>

        <div className={classes.About8Child}>
          <h6>Call for Partners</h6>
          <h2>We believe in today’s rapidly evolving digital landscape</h2>
          <p>
            We are constantly seeking out new partnerships with innovative
            companies and individuals who share our vision and values, and who
            are committed to delivering exceptional solutions to our clients.
            Our team of experts is ready to discuss more about our partnerships
            programs and explore how we can collaborate to achieve growth and
            success for our clients.
          </p>

          <Button text={learn} />
        </div>
      </div>
    </div>
  );
};

export default About8;
