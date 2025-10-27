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
          Your End-to-End Strategic Partner for Global Digital Transformation
        </h1>

        <p>
          Delivering strategic IT consulting for ambitious startups and enterprises worldwide
        </p>
        {/* <div className={classes.HomePage1Bt}> */}
        <Button
          text={learn}
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HomePage1;
