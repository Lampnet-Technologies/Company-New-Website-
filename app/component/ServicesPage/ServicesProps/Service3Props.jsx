"use client";
import React from "react";
import Image from "next/image";
import classes from "./Service3Props.module.css";

const Service3Props = ({ data, props, mail, paragraph1 }) => {
  return (
    <div className={`${classes.Service3Main}`}>
      <div className={`container`}>
        <div className={classes.Service3Parent}>
          <h6> {mail} </h6>
          <h2> {props}</h2>
          <p> {paragraph1} </p>
        </div>

        <div className={classes.Service3Child}>
          {data.map((d) => (
            <div key={d.id} className={classes.Service3Bro}>
              {d.image && (
                <Image src={d.image} alt={d.header} quality={100} width={40} />
              )}
              {d.button && <button>{d.button} </button>}
              <h6>{d.header} </h6>
              <p>{d.body} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service3Props;
