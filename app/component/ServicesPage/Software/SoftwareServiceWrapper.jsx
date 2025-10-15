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
    text: "Ideation and Conceptualization",
    body: "We explore the business problem that the software product will address and brainstorm potential solutions. We gather requirements, research the market and competitors, and identify opportunities for innovation. This phase is focused on idea generation and high-level planning.",
    body1:
      "We use techniques such as brainstorming sessions, user interviews, to gather insights and feedback from stakeholders, including business owners, end-users, and subject matter experts. We use this information to make user-driver decisions that help us better understand the users' needs and goals.",
  },
  {
    id: 2,
    text: "Business Analysis",
    body: "We gather and analyze information about the business needs, requirements, and constraints of the product. We identify stakeholders, define features and functionality, and analyze requirements considering feasibility, impact, and alignment with the business strategy.",
    body1: "We also use modeling tools and techniques to help us visualize and understand the business processes and requirements. By the end of the business analysis phase, we should have a clear understanding of the product requirements and have documented them in a way that is understandable and actionable for the development team.",
  },
  {
    id: 3,
    text: "Product Architecture",
    body: "We create a detailed technical blueprint that outlines the structure and organization of the software product. This blueprint is optimized for performance, maintainability, and scalability, and it takes into account potential changes that may arise over time.",
    body1:
      "By creating a detailed technical design, we can reduce the likelihood of costly mistakes and redesigns later in the development process. This is because the design phase allows us to identify potential issues and address them before writing any code.",
  },
  {
    id: 4,
    text: "Design and Development",
    body: "We translate the requirements and technical design into software code. We use programming languages, frameworks, and tools to write, test, and debug code, adhering to established coding standards and best practices. Along with coding, we also develop user interfaces, APIs, and databases that support the software product's functionality.",
    body1:
      "We write, test, and debug code using an iterative approach, collaborating with other developers and stakeholders to ensure the software meets business needs. We also optimize performance, security, and scalability using testing and profiling tools.",
  },
  {
    id: 5,
    text: "Market Launch",
    body: "We conduct final testing and quality assurance checks to ensure the software is functioning correctly, and all identified issues have been resolved. We also develop marketing strategies, including branding, pricing, and promotion, to attract potential customers and generate interest in the software product.",
    body1: "Once the software product is released to the market, we monitor user feedback and reviews to identify any issues or areas of improvement.  and provide ongoing support and maintenance to ensure the software remains up to date and compatible with the latest technologies.",
  },
];
