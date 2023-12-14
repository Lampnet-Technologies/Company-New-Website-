"use client";
import React, { useState } from "react";
import classes from "./HomePage9.module.css";
import MyButton from "../Button/Button";

const HomePage9 = () => {
  const [initial, setInitial] = useState("Discuss with us");
  return (
    <div className={classes.HomePage9main}>
      <div className={`container ${classes.HomePage9parent}`}>
        <h6>Let’s Collaborate</h6>
        <h2>Do You Have a Project Idea in Mind?</h2>
        <p>
          {" "}
          Our team of experts is ready to discuss more about our partnerships
          programs and explore how we can collaborate to achieve growth and
          success for our clients.
        </p>

        <MyButton
          text={initial}
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
      </div>
    </div>
  );
};

export default HomePage9;
