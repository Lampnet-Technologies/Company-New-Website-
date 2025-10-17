"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const CoWorkspaceWrapper = () => {
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
      />
    </Product9Wrapper>
  );
};

export default CoWorkspaceWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Supporting early-stage teams with flexible workspace solutions that grow with their ambitions.",
    body1:
      "Providing affordable shared offices and private suites designed to inspire innovation and collaboration.",
    body2:
      "Offering networking tools and booking systems to help startups connect, scale, and focus on what matters most — building their vision.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses to operate seamlessly with smart workspace management and digital tools.",
    body1:
      "Simplifying workspace scheduling, meeting room bookings, and team coordination through an integrated platform.",
    body2:
      "Improving efficiency with analytics, billing automation, and team access control — all in one solution.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Helping co-working and office franchises manage multiple locations while maintaining brand consistency and service quality.",
    body1:
      "Centralizing operations and tenant data for all branches within one secure system.",
    body2:
      "Tracking occupancy, revenue, and member engagement across locations with real-time dashboards and insights.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering enterprise-grade workspace and facility management solutions that optimize operations and elevate employee experiences.",
    body1:
      "Customizing large-scale office networks with smart access, energy efficiency, and booking systems.",
    body2:
      "Leveraging data analytics to enhance space utilization, reduce overhead, and improve productivity across departments.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
