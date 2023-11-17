"use client";
import React, { useState } from "react";
import classes from "./HomePage11a.module.css";
import Image from "next/image";
import ButtonTwo from "../Button/ButtonTwo";

const HomePage11a = ({ selectedCardData }) => {
  const [initial, setInitial] = useState("Learn more");
  return (
    <div className={`${classes.sidebar}`}> 
      {selectedCardData ? (
        <>
          <h2>{selectedCardData.text}</h2>
          <p> {selectedCardData.body} </p>
 
          <div className={classes.sidebarChild}>
            <div className={classes.sidebarBro}>  
              <Image
                src={selectedCardData.imagea}
                alt={selectedCardData.texta}
                quality={100}
                width={30}
              />
              <p> {selectedCardData.texta} </p>
            </div>
            <div className={classes.sidebarBro}>
              <Image
                src={selectedCardData.imageb}
                alt={selectedCardData.textb}
                quality={100} 
                width={30}
              />
              <p> {selectedCardData.textb} </p>
            </div>
            <div className={classes.sidebarBro}>
              <Image
                src={selectedCardData.imagec}
                alt={selectedCardData.textc}
                quality={100}
                width={30}
              />
              <p> {selectedCardData.textc} </p>
            </div>
            <div className={classes.sidebarBro}>
              <Image
                src={selectedCardData.imaged}
                alt={selectedCardData.textd}
                quality={100}
                width={30}
              />
              <p> {selectedCardData.textd} </p>
            </div>
          </div>
        </>
      ) : (
        <p>Please select a card to display data</p>
        
      )}
      <div className= {classes.sideBarButton}>
        <ButtonTwo text={initial} />
      </div>
    </div>
  );
};

export default HomePage11a;
