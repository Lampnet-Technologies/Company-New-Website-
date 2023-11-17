"use client";
import classes from "./Product9b.module.css";
import React, { useState } from "react";
import Image from "next/image";
import CircleBody from "../../../../public/images/CircleBody.svg";
import MyButton from "../../Button/Button";

const Product9b = ({ selectedCardData }) => {
  return (
    <div className={`${classes.Product9bsidebar}`}>
      {selectedCardData ? (
        <>
          {" "}
          <Image
            src={selectedCardData.image}
            alt={selectedCardData.text}
            quality={100}
            width={50}
          />
          <h2>{selectedCardData.text}</h2>
          <p> {selectedCardData.body} </p>
          <p>
            {" "}
            <Image src={CircleBody} alt="" quality={100} />{" "}
            {selectedCardData.body1}{" "}
          </p>
          <p>
            <Image src={CircleBody} alt="" quality={100} />{" "}
            {selectedCardData.body2}{" "}
          </p>
          <div className={classes.Product9bButton}>
            <MyButton text="Build with us" />
          </div>
        </>
      ) : (
        <p>Please select a card to display data</p>
      )}
    </div>
  );
};

export default Product9b;
