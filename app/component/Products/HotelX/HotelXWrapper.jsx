"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const HotelXWrapper = () => {
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
  const background2 = "#34A853";
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

export default HotelXWrapper;

const data = [
  {
    id: 1,
    text: "Startups",
    body: "Helping new hospitality ventures establish a strong digital foundation and attract guests from day one.",
    body1:
      "Launch your boutique hotel or short-let business with a smart booking and management platform.",
    body2:
      "Automate reservations, guest communication, and payments to save time and enhance efficiency.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and mid-sized hotels to simplify daily operations and maximize guest satisfaction.",
    body1:
      "Manage bookings, check-ins, and billing from a single dashboard—no technical expertise required.",
    body2:
      "Use integrated analytics to track occupancy rates and optimize pricing strategies in real-time.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise & Chains",
    body: "Providing multi-property solutions that ensure brand consistency and centralized control across all locations.",
    body1:
      "Manage all branches from one system with real-time updates on reservations, inventory, and staff performance.",
    body2:
      "Access performance insights and guest feedback analytics across multiple properties to drive growth.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprises",
    body: "Delivering enterprise-grade, cloud-based hotel management systems built for scalability and innovation.",
    body1:
      "Integrate advanced modules for revenue management, housekeeping automation, and guest personalization.",
    body2:
      "Leverage AI-driven insights to improve decision-making, streamline workflows, and enhance guest experiences at scale.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
