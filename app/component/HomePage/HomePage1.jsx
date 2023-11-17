"use client";

import React, { useState } from "react";
import classes from "./HomePage1.module.css";
import MyButton from "../Button/Button";

const HomePage1 = () => {
  const [learn, setlearn] = useState("Learn More");

  return (
   
    <div className={`${classes.Homepage1Main} `}>
      <div className= {`container ${classes.Homepage1Parent} `}>
        <h1>No. 1 Pre-built Solution Development Company In West Africa</h1>

        <p>
          LampNet Solutions is the leading provider of comprehensive ICT
          services like SAAS, PAAS, IAAS services for all African businesses in
          West Africa.
        </p>

        <MyButton text={learn} />
      </div>
    </div>  
  );
};

export default HomePage1;
