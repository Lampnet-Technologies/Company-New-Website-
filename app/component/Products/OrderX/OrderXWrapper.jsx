"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const OrderXWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };
  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);

  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #3E83EA";
  const background = "rgba(62, 131, 234, 0.2)";
  const color = "#3E83EA";
  const color2 = "#fff";
  const background2 = "#F76C6C";
  return (
    <Product9Wrapper backgroundColor={wrapperBackgroundColor}>
      <Product9a
        onCardClick={handleCardClick}
        data={data}
        border={border}
        background={background}
        color={color}
        color2={color2}
      />
      <Product9b
        selectedCardData={selectedCardData}
        background2={background2}
      />
    </Product9Wrapper>
  );
};

export default OrderXWrapper;

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
