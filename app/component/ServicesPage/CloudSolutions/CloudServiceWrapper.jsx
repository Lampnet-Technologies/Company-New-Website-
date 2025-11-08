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
    text: "Planning",
    body: "In this phase, we work with your business to understand your needs and objectives for cloud solutions. We analyze your existing IT infrastructure and determine the best cloud solutions that can help you achieve your goals.",
    body1:
      "This phase is critical in ensuring that the cloud solutions meet your business requirements and provide the desired benefits.",
  },
  {
    id: 2,
    text: "Deployment",
    body: "This phase involves setting up the cloud infrastructure and configuring the necessary services. We work with your business to determine the optimal deployment strategy that will minimize downtime and disruption to your operations.",
    body1: "Our team handles all the technical aspects of the deployment, including setting up virtual machines, configuring network settings, and deploying applications. We ensure that the cloud environment is secure and fully operational before proceeding to the next phase.",
  },
  {
    id: 3,
    text: "Testing",
    body: "In this phase, we conduct thorough testing to ensure that the cloud solutions are functioning as expected. We run various tests, such as load testing and performance testing, to identify any issues and optimize the performance of the cloud environment. This phase is critical in ensuring that the cloud solutions meet your business requirements and provide the desired benefits.",
    body1:
      "This phase is critical in ensuring that the cloud solutions meet your business requirements and provide the desired benefits.",
  },
  {
    id: 4,
    text: "Migration",
    body: "This phase involves migrating your data and applications to the cloud environment. We work with your business to develop a migration plan that minimizes disruption to your operations and ensures that your data and applications are securely transferred to the cloud.",
    body1:
      "Our team handles all the technical aspects of the migration, such as data transfer and application reconfiguration, to ensure a smooth transition.",
  },
  {
    id: 5,
    text: "Optimization",
    body: "We conduct final testing and quality assurance checks to ensure the software is functioning correctly, and all identified issues have been resolved. We also develop marketing strategies, including branding, pricing, and promotion, to attract potential customers and generate interest in the software product.",
    body1: "Once the software product is released to the market, we monitor user feedback and reviews to identify any issues or areas of improvement.  and provide ongoing support and maintenance to ensure the software remains up to date and compatible with the latest technologies.",
  },
];
