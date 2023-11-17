"use client";
import React, { useState } from "react";
import Service4a from "./Service4a";
import ServicePageWrapper from "./ServicePageWrapper";
import Service4b from "./Service4b";

const ServiceWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };
  return (
    <ServicePageWrapper>
      <Service4a onCardClick={handleCardClick} />
      <Service4b selectedCardData={selectedCardData} />
    </ServicePageWrapper>
  );
};

export default ServiceWrapper;
