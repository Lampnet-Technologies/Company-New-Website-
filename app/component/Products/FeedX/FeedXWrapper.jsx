"use client";
import React, { useState, useEffect } from "react";
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

  // useEffect to simulate a component did mount and set initial selectedCardData
  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);
  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #3E83EA";
  const background = "rgba(62, 131, 234, 0.2)";
  const color = "#3E83EA";
  const color2 = "#fff";
  const background2 = "#F6613F";
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

export default FeedXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Empowering new food delivery startups to enter the market quickly with a ready-to-launch, customizable solution.",
    body1:
      "Launch your own branded food delivery app (for customers, restaurants, and riders) without building from scratch.",
    body2:
      "Use built-in marketing, tracking, and analytics tools to attract users and scale operations from day one.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Helping small and medium food businesses streamline delivery operations and improve customer engagement.",
    body1:
      "Offer online ordering, real-time delivery tracking, and integrated payment systems to grow your reach.",
    body2:
      "Automate restaurant management, driver assignments, and customer communications with smart workflows.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing franchise owners with centralized control while maintaining local branch autonomy and performance tracking.",
    body1:
      "Manage multiple franchise locations through a single dashboard with real-time visibility into sales and orders.",
    body2:
      "Ensure consistent branding and quality service across all outlets with built-in analytics and reporting tools.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering scalable, data-driven solutions for large-scale food delivery enterprises to optimize performance and growth.",
    body1:
      "Integrate your FoodX platform with existing enterprise systems for seamless operations and enhanced efficiency.",
    body2:
      "Leverage AI-powered insights, predictive analytics, and automation to drive strategic decision-making and innovation.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
