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
    body: "In this phase, we work with your business to identify the goals and requirements of the API, determine what data and functionality will be exposed, and define the scope of the project.",
    body1:
      "We will also identify any potential challenges or limitations and develop a project timeline and budget. This phase is critical to ensuring that the API meets the needs of your business and its users.",
  },
  {
    id: 2,
    text: "Design and Documentation",
    body: "Once we have a clear understanding of your business requirements, we will move on to designing the API. We will create a detailed API specification that defines the endpoints, parameters, response formats, authentication mechanisms, and other technical details. ",
    body1:
      "This phase requires close collaboration between our team and yours to ensure that the API design meets your business needs and is user-friendly. We also ensure that the documentation is clear, concise, and easy to understand.",
  },
  {
    id: 3,
    text: "Implementation",
    body: "In this phase, we will write the code for the API, which includes creating database schemas, designing and building the API endpoints, and implementing any necessary authentication and security measures. We will also perform thorough testing to ensure that the API is functioning as expected.",
  },
  {
    id: 4,
    text: "Testing and Deployment",
    body: "Once the implementation phase is complete, we test the API to ensure that it functions correctly and meets all of the requirements specified in the design document. We also test the API's security features and verify that it can handle high traffic volumes. We work with your business to identify and fix.",
    body1:
      "Then, we deploy the API to the production environment. We work with your business to ensure that the API is properly configured and that all necessary security measures are in place. We also monitor the API's performance to ensure that it is running smoothly and efficiently.",
  },
  {
    id: 5,
    text: "Maintenance",
    body: "We monitor the API's performance, apply updates and patches as necessary, and respond to any issues or bugs that arise. We also work with your business to implement any new features or functionality that may be required.",
    body1:
      "Throughout this phase, we remain committed to ensuring that the API continues to meet your business's needs and objectives.",
  },
];
