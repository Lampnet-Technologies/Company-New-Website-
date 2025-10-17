"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const NCXPOSWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };

  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);

  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #F76C6C";
  const background = "rgba(234, 62, 62, 0.2)";
  const color = "#F76C6C";
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

export default NCXPOSWrapper;

const data = [
  {
    id: 1,
    text: "Startups",
    body: "Helping early-stage businesses launch faster with smart, scalable POS and ERP tools designed for growth.",
    body1:
      "Set up your first branch, manage inventory, and start invoicing instantly with an all-in-one system.",
    body2:
      "Automate reporting, payments, and stock tracking so you can focus on building your brand — not managing spreadsheets.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses to streamline operations, boost efficiency, and improve customer experience.",
    body1:
      "Easily handle daily sales, inventory, and customer management across multiple warehouses or outlets.",
    body2:
      "Leverage built-in analytics and smart alerts to reduce losses, optimize stock, and grow profitably.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchises",
    body: "Centralizing your multi-location business with unified POS, ERP, and reporting dashboards — built for brand consistency.",
    body1:
      "Monitor performance across all branches in real time with consolidated sales, inventory, and user data.",
    body2:
      "Enable each location to operate independently while keeping full control over pricing, promotions, and access rights.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprises",
    body: "Delivering enterprise-grade, cloud-powered management systems that drive efficiency, compliance, and scalability.",
    body1:
      "Modernize outdated systems with secure multi-branch ERP solutions, custom workflows, and SaaS-ready modules.",
    body2:
      "Integrate with payment gateways, e-commerce platforms, and accounting tools for a complete digital ecosystem.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
