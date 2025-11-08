"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const ThriftXWrapper = () => {
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
  const color = "#E47E1F";
  const color2 = "#fff";
  const background2 = "#E47E1F";
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

export default ThriftXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Helping early-stage businesses implement secure, scalable financial systems to launch and grow efficiently.",
    body1:
      "Set up digital wallets, payment gateways, and online banking features to attract investors and customers.",
    body2:
      "Deploy automated financial tools for accounting, invoicing, and analytics to support rapid growth.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses with fintech solutions that streamline payments, operations, and customer management.",
    body1:
      "Integrate e-commerce platforms with payment processing and accounting systems for seamless transactions.",
    body2:
      "Implement digital invoicing, automated reporting, and CRM tools to enhance productivity and customer experience.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing centralized financial management tools to maintain consistency and oversight across multiple locations.",
    body1:
      "Deploy unified payment processing and reporting systems for each branch while maintaining brand standards.",
    body2:
      "Monitor revenue, transactions, and performance across all locations with real-time dashboards and analytics.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering enterprise-grade fintech platforms that scale securely, optimize operations, and drive strategic growth.",
    body1:
      "Modernize legacy financial systems with cloud-based banking, automated workflows, and integrated reporting.",
    body2:
      "Leverage advanced analytics, AI-driven insights, and compliance management to inform business strategy and innovation.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
