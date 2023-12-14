"use client";
import React from "react";
import classes from "./Service5Props.module.css";
import MyButton from "../../Button/Button";
import Image from "next/image";
import Form from "../../Form/page";

const Service5Props = (props) => {
  return (
    <div className={classes.Service5Main}>
      <div className={`container ${classes.Service5Parent}`}>
        <div className={classes.Service5Child}>
          <h6>{props.header} </h6>
          <h2>{props.subHeader} </h2>
          <p>{props.paragraph} </p>

          <MyButton
            text={props.initial}
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
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

        <div className={classes.Service5Image}>
          <Image src={props.Glad} alt="" quality={100} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Service5Props;
