"use client";
import React, { useState } from "react";
import classes from "./Product9a.module.css";
import Image from "next/image";

const Product9a = ({ onCardClick, data }) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);

    const selectedData = data.find((d) => d.id === cardId);
    onCardClick(selectedData);
  };
  return (
    <div className={classes.Product9aScrollContainer}>
      <div className={classes.Product9aMain}>
        {data.map((d) => (
          <div
            key={d.id}
            className={`${classes.Product9aChild} ${
              selectedCard === d.id ? classes.SelectedProduct9aCousin : ""
            }`}
            onClick={() => handleCardClick(d.id)}
          >
            <div className={classes.Product9aSister}>
              <Image src={d.imagea} alt={d.text} quality={100} />
              <p> {d.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product9a;
