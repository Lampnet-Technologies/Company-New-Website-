"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const NCXBBWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };

  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);

  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #d50ac8";
  const background = "rgba(203, 62, 234, 0.2)";
  const color = "#d50ac8";
  const color2 = "#fff";
  const background2 = "#d50ac8";
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

export default NCXBBWrapper;

const data = [
  {
    id: 1,
    text: "Startups",
    body: "Helping early-stage businesses launch and grow with a smart, affordable POS and inventory system built for modern entrepreneurs.",
    body1:
      "Set up your first store, manage sales and inventory, and generate invoices instantly — all from one clean dashboard.",
    body2:
      "Automate daily tasks like reporting, billing, and customer engagement using built-in accounting and promotional SMS tools.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses to run smoother, faster, and smarter with NCX Billing Book’s all-in-one platform.",
    body1:
      "Easily handle multi-currency billing, inventory control, and CRM from one system — whether you’re managing a single outlet or several.",
    body2:
      "Track expenses, taxes, and profits in real time with integrated accounting and warehouse management tools.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchises",
    body: "Centralizing your franchise operations with synchronized POS, stock, and reporting dashboards for every branch.",
    body1:
      "Monitor performance across locations in real time with consolidated analytics and branch-level permissions.",
    body2:
      "Keep your brand consistent while each outlet operates independently — manage pricing, users, and promotions from one control center.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprises",
    body: "Delivering enterprise-grade POS and ERP capabilities with advanced control, compliance, and scalability for large organizations.",
    body1:
      "Modernize legacy workflows through multi-warehouse management, automated billing, and real-time insights.",
    body2:
      "Integrate seamlessly with e-commerce, accounting, and payment systems for a unified business ecosystem.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
