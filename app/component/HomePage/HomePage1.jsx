"use client";
import React from "react";
import classes from "./HomePage1.module.css";
import Button from "../Button/Button";
import Link from "next/link";

const HomePage1 = () => {
  const learn = "Learn More";

  return (
    <div className={`${classes.Homepage1Main} `}>
      <div className={`container ${classes.Homepage1Parent} `}>
        <h1>
          No. 1 App Development & Cloud-based solution company In West Africa
        </h1>

        <p>
          LampNet Solutions is the leading provider of comprehensive ICT
          services like SAAS, PAAS, IAAS services for all African businesses in
          West Africa.
        </p>
        {/* <div className={classes.HomePage1Bt}> */}
        <Button
          text={learn}
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePage1;
