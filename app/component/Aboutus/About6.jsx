"use client";
import React, { useState } from "react";
import classes from "./About6.module.css";
import MyButton from "../Button/Button";
import Link from "next/link";

const About6 = () => {
  const [initial, setInitial] = useState("Check Out Our Solutions");
  return (
    <div className={classes.About6main}>
      <div className={`container ${classes.About6parent}`}>
        <h6>Let’s Collaborate</h6>
        <h2>Do You Have a Project Idea in Mind?</h2>
        <p>
          {" "}
          Our team of experts is ready to discuss more about our partnerships
          programs and explore how we can collaborate to achieve growth and
          success for our clients.
        </p>
        <Link href="/co-workspace-x">
          <MyButton text={initial} />
        </Link>
      </div>
    </div>
  );
};

export default About6;
