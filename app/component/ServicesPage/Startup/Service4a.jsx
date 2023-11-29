"use client";
import React, { useState, useEffect, useRef } from "react";
import classes from "./Service4a.module.css";

const Service4a = ({ onCardClick, data }) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);

    const selectedData = data.find((d) => d.id === cardId);
    onCardClick(selectedData);
  };

  return (
    <div className={classes.Service4aScrollContainer}>
      <div className={classes.Service4aMain}>
        {data.map((d) => (
          <div
            key={d.id}
            className={`${classes.Service4aChild} ${
              selectedCard === d.id ? classes.SelectedFour : ""
            }`}
            onClick={() => handleCardClick(d.id)}
          >
            <div className={classes.Service4aSister}>
              <p> {d.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service4a;
