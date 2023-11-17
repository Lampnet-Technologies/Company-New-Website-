"use client";
import React, { useState } from "react";
import classes from "./Service4b.module.css";

const Service4b = ({ selectedCardData }) => {
  return (
    <div className={`${classes.Service4bsidebar}`}>
      {selectedCardData ? (
        <>
          <h2>{selectedCardData.text}</h2>
          <p> {selectedCardData.body} </p>
          <p> {selectedCardData.body1} </p>
        </>
      ) : ( 
        <p>Please select a card to display data</p>
      )}
    </div>
  );
};

export default Service4b;
 