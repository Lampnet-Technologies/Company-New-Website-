"use client";
import React, { useState } from "react";
import classes from "./Product9a.module.css";
import Image from "next/image";

const Product9a = ({
  onCardClick,
  data,
  border,
  background,
  color,
  color2,
}) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(null);
  const handleCardClick = (cardId, backgroundColor) => {
    setSelectedCard(cardId);
    setSelectedBackgroundColor(backgroundColor);
    const selectedData = data.find((d) => d.id === cardId);
    onCardClick(selectedData, backgroundColor);
  };

  const pStyle = {
    color: color2 || "#3E83EA",
  };

  return (
    <div className={classes.Product9aScrollContainer}>
      <div className={classes.Product9aMain}>
        {data.map((d) => (
          <div
            // style={borderStyle}
            style={{
              border: border || "1px solid #54bd95",
              background:
                selectedCard === d.id
                  ? selectedBackgroundColor
                  : "rgba(255, 255, 255, 0.05)",
              color: color || "#3E83EA",
            }}
            key={d.id}
            className={`${classes.Product9aChild} ${
              selectedCard === d.id ? classes.SelectedProduct9aCousin : ""
            }`}
            onClick={() => handleCardClick(d.id, d.backgroundColor)}
          >
            <div className={classes.Product9aSister}>
              <Image src={d.imagea} alt={d.text} quality={100} />
              <p style={pStyle}> {d.text} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product9a;
