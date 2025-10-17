"use client";
import React, { useState, useEffect } from "react";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const MedXWrapper = () => {
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

export default MedXWrapper;
const data = [
  {
    id: 1,
    text: "Startup",
    body: "Supporting emerging healthcare startups in building secure, scalable, and compliant digital health platforms.",
    body1:
      "Launching innovative telemedicine or clinic management MVPs to attract investors and early adopters.",
    body2:
      "Implementing automated appointment systems, patient data tracking, and analytics for fast growth and efficient service delivery.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and mid-sized clinics, pharmacies, and healthcare centers to streamline operations and deliver better patient care.",
    body1:
      "Developing electronic medical record (EMR) systems with billing, inventory, and prescription management capabilities.",
    body2:
      "Integrating CRM tools to improve patient engagement, appointment scheduling, and follow-up efficiency.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Providing centralized healthcare management systems for multi-branch hospitals and diagnostic centers to ensure operational consistency and compliance.",
    body1:
      "Building unified dashboards to manage multiple hospital locations with real-time patient data and performance insights.",
    body2:
      "Standardizing workflows, reports, and treatment protocols across branches to maintain care quality and brand integrity.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprise",
    body: "Delivering enterprise-grade, scalable, and AI-powered hospital management systems for large healthcare networks and institutions.",
    body1:
      "Migrating legacy systems to the cloud with enhanced interoperability, security, and compliance with healthcare regulations.",
    body2:
      "Implementing advanced analytics, automation, and predictive tools to optimize hospital operations and patient outcomes.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
