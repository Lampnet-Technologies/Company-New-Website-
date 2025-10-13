"use client";
import React, { useState } from "react";
import classes from "./HomePage7.module.css";
import ButtonThree from "../Button/ButtonThree";
import Image from "next/image";
import HomePage7Image from "../../../public/images/HomePage7.svg";
import Button from "../Button/Button";
import Form from "../Form/page";

const HomePage7 = () => {
  const [learn, setLearn] = useState("Partner with us");
  return (
    <div className={`container ${classes.HomePage7Main}`}>
      <div className={classes.HomePage7Parent}>
        <div className={classes.HomePage7ImageA}>
          <Image
            src={HomePage7Image}
            alt="Partnership illustration"
            quality={100}
            width={500}
            height={400}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className={classes.HomePage7Child}>
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
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
        </div>

        <div className={classes.HomePage7ImageB}>
          <Image src={HomePage7Image} alt="" quality={100} width={500} />
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title">Book An Appointment With Us</h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage7;
