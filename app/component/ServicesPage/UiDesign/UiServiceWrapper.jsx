"use client";
import React, { useState, useEffect } from "react";
import Service4a from "../Startup/Service4a";
import ServicePageWrapper from "../Startup/ServicePageWrapper";
import Service4b from "../Startup/Service4b";

const ServiceWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };

  // useEffect to simulate a component did mount and set initial selectedCardData
  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);
  return (
    <ServicePageWrapper>
      <Service4a onCardClick={handleCardClick} data={data} />
      <Service4b selectedCardData={selectedCardData} />
    </ServicePageWrapper>
  );
};

export default ServiceWrapper;

const data = [
  {
    id: 1,
    text: "Define Business Goals",
    body: "In this phase, we work closely with your business to understand your objectives, target audience, and user needs. We define measurable goals that align with your business vision and develop a customized plan that outlines the scope of the project.",
    body1:
      "Our team ensures that we have a clear understanding of your business goals before moving to the next phase. At the end of this phase, your business will have a clear direction for the project and an understanding of how the UI/UX design process will help achieve your objectives.",
  },
  {
    id: 2,
    text: "Data Analysis",
    body: "In this phase, we gather data and analyze user behavior to gain insights into their preferences and pain points. We use a variety of research methods such as surveys, user testing, and analytics to gather data. Our team then analyzes this data to develop a deeper understanding of your users and their needs.",
    body1:
      "We use this information to inform the design process and ensure that the final product meets the needs of your users. At the end of this phase, your business will have a thorough understanding of your users and their preferences, which will guide the design decisions.",
  },
  {
    id: 3,
    text: "Ideation and Prototyping",
    body: "In this phase, we focus on the visual elements of the design, including color, typography, and layout. We create a high-fidelity prototype that accurately represents the final design. Our team ensures that the design is consistent with your brand identity and aligns with your business goals.",
    body1: "Our team iterates on the design until we have a prototype that meets the needs of your users and aligns with your business goals. At the end of this phase, your business will have a clear idea of the design direction and an initial prototype that can be tested with users.",
  },
  {
    id: 4,
    text: "Visual Design",
    body: "In this phase, we focus on the visual elements of the design, including color, typography, and layout. We create a high-fidelity prototype that accurately represents the final design. Our team ensures that the design is consistent with your brand identity and aligns with your business goals.",
    body1:
      "We use feedback from stakeholders and users to refine the design until we have a final product that meets your requirements. At the end of this phase, your business will have a visually appealing and functional design that meets the needs of your users.",
  },
  {
    id: 5,
    text: "Validation",
    body: "In this final phase, we test the design with users to ensure that it meets their needs and expectations. We gather feedback and make any necessary adjustments to the design. Our team ensures that the final product is user-friendly, accessible, and meets your business goals.",
    body1:
      "At the end of this phase, your business will have a fully validated design that provides a positive user experience and meets your objectives.",
  },
];
