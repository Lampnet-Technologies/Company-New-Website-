"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const RestaurantWrapper = () => {
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

export default RestaurantWrapper;

const data = [
  {
    id: 1,
    text: "Startup Restaurant",
    body: "Helping new restaurants and cloud kitchens establish a strong digital presence and streamline daily operations from day one.",
    body1:
      "Launch an online ordering system or delivery-ready app to attract your first wave of customers.",
    body2:
      "Use built-in marketing tools and real-time sales insights to grow quickly and efficiently.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "Small & Medium Restaurants",
    body: "Empowering small and mid-sized restaurants to simplify management, reduce costs, and increase customer satisfaction through smart automation.",
    body1:
      "Integrate POS, online ordering, and kitchen operations into one smooth, easy-to-manage system.",
    body2:
      "Boost efficiency with automated reservations, inventory tracking, and loyalty programs.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise Chains",
    body: "Providing multi-branch restaurants with centralized tools to maintain consistency, manage staff, and monitor performance across all locations.",
    body1:
      "Build a unified platform that supports menu updates, branch analytics, and local delivery tracking.",
    body2:
      "Ensure every outlet stays on brand while optimizing overall sales and customer engagement.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise Hospitality Groups",
    body: "Delivering powerful, enterprise-grade restaurant management solutions to optimize large-scale operations and drive long-term innovation.",
    body1:
      "Integrate advanced analytics, AI insights, and automation to unify sales, supply chain, and customer experience.",
    body2:
      "Modernize legacy systems with cloud-based management and real-time data dashboards for strategic decisions.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
