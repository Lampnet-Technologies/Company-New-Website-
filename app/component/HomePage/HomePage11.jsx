"use client";
import React, { useState } from "react";
import classes from "./HomePage11.module.css";
import Image from "next/image";
import arrowOne from "../../../public/images/arrowOne.svg";
import arrowTwo from "../../../public/images/arrowTwo.svg";

const HomePage11 = ({ onCardClick, data }) => {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);

    const selectedData = data.find((d) => d.id === cardId);
    onCardClick(selectedData);
  };

  return (
    <div className={`${classes.HomePage11}`}>
      <div className={classes.DataList}>
        {data.map((d) => (
          <div
            key={d.id}
            className={`${classes.DataListChild} ${
              selectedCard === d.id ? classes.SelectedThree : ""
            }`}
            onClick={() => handleCardClick(d.id)}
          >
            <div className={classes.DataListSister}>
              <Image src={d.image} alt={d.text} quality={100} width={40} />
              <p> {d.text} </p>
            </div>

            <div className={classes.HomePage11img}>
              {selectedCard === d.id ? (
                <Image
                  src={arrowOne}
                  alt="Arrow One"
                  quality={100}
                  width={30}
                />
              ) : (
                <Image
                  src={arrowTwo}
                  alt="Arrow Two"
                  quality={100}
                  width={30}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage11;
