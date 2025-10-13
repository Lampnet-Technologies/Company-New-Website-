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
    body: "Helping early-stage businesses build scalable digital foundations and gain market visibility",
    body1:
      "Launching a new product website or MVP to attract investors and users.",
    body2: "Setting up automated tools for marketing, sales, and analytics to support fast growth.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses to streamline operations and boost efficiency through tailored tech solutions",
    body1:
      "Developing an e-commerce platform with integrated inventory and payment systems.",
    body2: "Implementing CRM and workflow automation to improve customer retention and productivity.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing centralized digital solutions to maintain brand consistency and manage multi-location operations effectively",
    body1:
      "Building a unified online platform that supports location-specific pages for each franchise branch.",
    body2: "Integrating performance dashboards to monitor sales, marketing, and customer engagement across branches.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering scalable, secure, and customized enterprise-grade systems that drive innovation and operational excellence",
    body1:
      "Modernizing legacy systems through cloud migration and process automation.",
    body2: "Implementing advanced analytics and AI-driven insights for strategic decision-making.",
    image: StartupScroll,
    imagea: Scroll,
  },
];