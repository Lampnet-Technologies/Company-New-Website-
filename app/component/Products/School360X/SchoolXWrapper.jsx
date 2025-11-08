"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const SchoolXWrapper = () => {
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

export default SchoolXWrapper;

const data = [
  {
    id: 1,
    text: "Startup",
    body: "Supporting emerging EdTech startups and new schools to build strong digital foundations for growth.",
    body1:
      "Launch your online learning platform or school management MVP to attract students, investors, and partners.",
    body2:
      "Automate administrative processes like admissions, attendance, and reporting from day one to ensure smooth scaling.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium-sized institutions to digitize operations and enhance learning efficiency.",
    body1:
      "Integrate School 360 to manage students, staff, and classrooms from a single dashboard.",
    body2:
      "Use built-in communication and analytics tools to improve engagement, transparency, and school performance.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Helping education networks and multi-campus institutions manage operations under one centralized system.",
    body1:
      "Build a unified school platform that supports individual campuses while maintaining consistent branding and reporting.",
    body2:
      "Monitor academic and financial performance across branches through centralized analytics and cloud-based management.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering scalable, secure, and customizable enterprise-grade solutions for large universities and education systems.",
    body1:
      "Modernize legacy academic management systems with AI-driven automation and cloud migration.",
    body2:
      "Enable data-driven decision-making through advanced analytics and deep system integrations for every department.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
