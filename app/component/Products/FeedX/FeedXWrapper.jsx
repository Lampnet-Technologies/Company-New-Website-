"use client";
import React, { useState } from "react";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";

const FeedXWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };

  const wrapperBackgroundColor = "#222";
  return (
    <Product9Wrapper backgroundColor={wrapperBackgroundColor}>
      <Product9a onCardClick={handleCardClick} data={data} />
      <Product9b selectedCardData={selectedCardData} />
    </Product9Wrapper>
  );
};

export default FeedXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Focused on Growing Business",
    body1:
      "I am serious and committed to the budget, looking to work in this online business for at least one year.",
    body2: "My company is already running & receiving real orders.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMB’s",
    body: "Focused on Growing Business",
    body1:
      "I am serious and committed to the budget, looking to work in this online business for at least one year.",
    body2: "My company is already running & receiving real orders.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Focused on Growing Business",
    body1:
      "I am serious and committed to the budget, looking to work in this online business for at least one year.",
    body2: "My company is already running & receiving real orders.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Focused on Growing Business",
    body1:
      "I am serious and committed to the budget, looking to work in this online business for at least one year.",
    body2: "My company is already running & receiving real orders.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
