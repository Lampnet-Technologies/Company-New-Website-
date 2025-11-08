"use client";
import React, { useState, useEffect } from "react";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const EstateXWrapper = () => {
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
  const background2 = "#AB0E12";
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

export default EstateXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Empowering new property ventures and real estate startups to build scalable digital foundations for rapid growth.",
    body1:
      "Launch your property listing or rental platform with tools designed to attract investors and early clients.",
    body2:
      "Automate marketing, lead management, and analytics to scale faster and operate efficiently from day one.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Helping small and medium-sized real estate businesses streamline operations and boost productivity with flexible digital solutions.",
    body1:
      "Develop a property management system with integrated rent tracking, maintenance requests, and payment processing.",
    body2:
      "Implement CRM and workflow automation to enhance tenant engagement and team collaboration.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing centralized control and unified tools to manage multi-location real estate or agency franchises effortlessly.",
    body1:
      "Create a single platform to oversee listings, agents, and branches while maintaining brand consistency.",
    body2:
      "Gain actionable insights with real-time dashboards for sales performance, occupancy rates, and marketing campaigns.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering enterprise-grade, scalable, and secure real estate solutions that power innovation and operational excellence.",
    body1:
      "Modernize existing systems with cloud-based infrastructure and seamless integration across business units.",
    body2:
      "Leverage AI-driven analytics and automated workflows to make smarter, data-backed portfolio decisions.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
