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
    text: "Assessment",
    body: "In the Assessment phase, we evaluate your current IT systems to identify areas for improvement and develop a customized roadmap for optimization.",
    body1:
      "During this phase, we analyze your IT landscape, collaborate with your team to understand your goals, and provide recommendations to align your IT systems with your business objectives.",
  },
  {
    id: 2,
    text: "Mapping Out Strategy",
    body: "During the mapping out IT strategy phase, we'll collaborate with you to develop a comprehensive IT plan that aligns with your business goals. We'll help you stay ahead of the curve with the latest IT trends and technologies.",
    body1:
      "With our IT strategy services, your business can achieve long-term success and stay competitive in a rapidly-changing marketplace.",
  },
  {
    id: 3,
    text: "Solution Delivery",
    body: "We'll implement the customized plan we developed with you in the previous phases. Our IT experts will guide you through each step of the process and provide training and support to optimize your IT systems.",
    body1: "With our IT strategy services, your business can achieve long-term success and stay competitive in a rapidly-changing marketplace.",
  },
  {
    id: 4,
    text: "Monitoring",
    body: "We'll work closely with your business to ensure that your IT systems are functioning at their best. Our team of IT experts will continuously monitor your systems to identify any issues or areas for improvement, and provide timely solutions to ensure minimal disruption to your business operations.",
    body1:
      "We’ll also work with you to set up performance metrics and benchmarks to track the effectiveness of your IT systems over time. With our monitoring and improvements services, you can have peace of mind knowing that your IT infrastructure is in good hands and optimized for maximum efficiency.",
  },
  {
    id: 5,
    text: "Improvement",
    body: "We also that the IT landscape is constantly evolving, and new technologies and trends emerge on a regular basis. That's why our team of experts will keep your business up-to-date with the latest developments in the IT industry.",
    body1:
      "We’ll provide ongoing training and support to your team, so they can stay ahead of the curve and make the most of your IT systems. With our monitoring and improvements services, your business can adapt to changing circumstances and remain competitive in a rapidly-changing marketplace.",
  },
];
