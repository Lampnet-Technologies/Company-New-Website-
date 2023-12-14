"use client";
import React, { useState } from "react";
import Image from "next/image";
import HomePage7Image from "../../../public/images/HomePage7.svg";
import Button from "../Button/Button";
import classes from "./About8.module.css";
import Form from "../Form/page";

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

          <Button
            text={learn}
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              {/* <h5 class="modal-title">Book An Appointment With Us</h5> */}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About8;
