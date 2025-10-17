"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const UberXWrapper = () => {
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
  const background2 = "#3E83EA";
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
        // selectedBackgroundColor={selectedBackgroundColor}
      />
    </Product9Wrapper>
  );
};

export default UberXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Empowering new ride-hailing startups to launch fast with scalable, ready-to-customize technology.",
    body1:
      "Build your MVP or full-scale ride-sharing app with RiderX’s pre-built modules for riders and drivers.",
    body2:
      "Use real-time tracking, analytics, and digital marketing tools to attract users and investors quickly.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "Small & Medium Businesses",
    body: "Helping local and mid-size transport or logistics companies digitize operations and grow efficiently.",
    body1:
      "Set up booking, driver management, and payment processing under one platform with minimal setup time.",
    body2:
      "Automate scheduling, trip tracking, and reporting to reduce costs and improve customer experience.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Supporting mobility and taxi franchises to unify multi-city operations under one connected platform.",
    body1:
      "Offer location-specific booking apps while maintaining consistent brand identity across regions.",
    body2:
      "Monitor trip data, performance, and revenue across branches with a centralized admin dashboard.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering enterprise-grade ride-hailing and fleet management solutions built for performance and scale.",
    body1:
      "Integrate RiderX with your existing ERP, CRM, and payment systems for seamless enterprise workflows.",
    body2:
      "Leverage AI-driven analytics and custom APIs to manage thousands of rides, drivers, and customers efficiently.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
