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
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
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

        <div className={classes.Service5Image}>
          <Image src={props.Glad} alt="" quality={100} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Service5Props;
