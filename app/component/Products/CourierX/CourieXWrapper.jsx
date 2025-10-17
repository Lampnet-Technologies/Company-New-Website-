"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const CourieXWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };

  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #3E83EA";
  const background = "rgba(62, 131, 234, 0.2)";
  const color = "#3E83EA";
  const color2 = "#fff";
  const background2 = "#54BD95";

  // useEffect to simulate a component did mount and set initial selectedCardData
  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);

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

export default CourieXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Empowering early-stage businesses to build scalable digital foundations and stand out in the market.",
    body1:
      "Designing and launching product websites or MVPs that attract users and investors.",
    body2:
      "Automating marketing, sales, and analytics to support rapid and sustainable growth.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Helping small and mid-sized businesses streamline operations and boost productivity through tailored technology.",
    body1:
      "Developing e-commerce platforms with integrated inventory, payment, and logistics systems.",
    body2:
      "Implementing CRM solutions and workflow automation to improve customer engagement and efficiency.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing centralized digital systems to ensure brand consistency and simplify multi-location management.",
    body1:
      "Creating unified online platforms with location-specific pages for each branch.",
    body2:
      "Integrating performance dashboards to track sales, marketing, and customer metrics across locations.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering secure, scalable, and intelligent enterprise-grade solutions that drive innovation and excellence.",
    body1:
      "Modernizing legacy infrastructure through cloud migration and process automation.",
    body2:
      "Leveraging advanced analytics and AI-driven insights for data-backed decision-making.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
