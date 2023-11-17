"use client";
import React, { useState, useEffect, useRef } from "react";
import classes from "./Service4a.module.css";

const Service4a = ({ onCardClick }) => {
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

const data = [
  {
    id: 1,
    text: "Product Discovery",
    body: "During the product discovery phase, we work closely with your business to understand your target market, identify key user needs and pain points, and develop a strategy for creating a product that meets those needs.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 2,
    text: "MVP Development & Testing",
    body: "Once we have a clear understanding of your product vision, we move onto the MVP development and testing phase. We work closely with your business to develop a minimum viable product (MVP) that includes the core features and functionalities needed to test your product in the market.",
  },
  {
    id: 3,
    text: "Product Launch",
    body: "With a validated MVP in hand, we move onto the product launch phase. We help your business plan and execute a successful launch that includes go-to-market strategy, branding, and messaging.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 4,
    text: "Product Scale-up",
    body: "Once your product is launched, we work with your business to scale it up. We help you identify growth opportunities, optimize your marketing efforts, and improve user engagement.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 5,
    text: "Technical Support",
    body: "Finally, we offer ongoing technical support to ensure that your product runs smoothly and that any technical issues are addressed quickly. We provide regular maintenance and updates to ensure that your product stays up-to-date with the latest technologies and that it continues to meet the evolving needs of your business and your customers.",
  },
];
