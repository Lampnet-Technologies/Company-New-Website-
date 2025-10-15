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
    text: "Consultation",
    body: "In this phase, we work with your business to identify your specific needs and requirements for additional IT staff or expertise. Our team of experts will assess your current IT infrastructure and workforce to determine the best solution for your business.",
  },
  {
    id: 2,
    text: "Talent Choice",
    body: "In this phase, we work with your business to identify your specific needs and requirements for additional IT staff or expertise. Our team of experts will assess your current IT infrastructure and workforce to determine the best solution for your business.",
  },
  {
    id: 3,
    text: "Integration and Support",
    body: "Before the final interview with our customer, our HR team assesses candidates' backgrounds, technical skills, English proficiency, and soft skills to select the best-fit individual.",
    body1: "Our team of experts will seamlessly integrate with your existing team or project to ensure a smooth transition. We provide ongoing support and assistance to ensure that our team works effectively with yours and that your business achieves its goals.",
  },
  {
    id: 4,
    text: "Project Management",
    body: "As soon as a specific specialist is chosen, we can start working on our customer’s project. Lampnet Solutions guarantees excellent specialists and the execution of your project’s tasks at the highest level.",
    body1:
      "We handle all aspects of project management, from planning and development to implementation and maintenance. Our team of experts will work with you to understand your project requirements and deliver customized solutions that meet your business goals.",
  },
  {
    id: 5,
    text: "Improvement",
    body: "We provide ongoing monitoring and improvements to your IT systems or network infrastructure to ensure that they are always running at peak performance. Our team of experts is always available to provide support and assistance whenever you need it.",
  },
];
