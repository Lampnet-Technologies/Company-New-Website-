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
    text: "AI Ideation and Strategy",
    body: "We begin by identifying how Artificial Intelligence can best serve your business goals. Our team collaborates with stakeholders to define AI use cases, assess feasibility, and develop a strategy that aligns with your objectives and available data.",
    body1:
      "Through brainstorming sessions, data audits, and business process mapping, we uncover opportunities to implement intelligent automation and predictive analytics. This helps us create a solid AI roadmap focused on measurable impact and innovation.",
  },
  {
    id: 2,
    text: "Data Collection and Preparation",
    body: "Data is the foundation of AI. We help you collect, clean, and structure high-quality datasets from multiple sources — ensuring that your AI models are trained on relevant, unbiased, and reliable information.",
    body1:
      "Our experts apply techniques such as data normalization, feature engineering, and data augmentation to prepare your information for model training. This stage ensures that your AI systems perform accurately and adapt to real-world conditions.",
  },
  {
    id: 3,
    text: "Model Development and Training",
    body: "Using advanced machine learning frameworks, we build and train custom AI models tailored to your business needs. From natural language processing to computer vision, our engineers develop intelligent systems that can analyze data, make predictions, and automate decisions.",
    body1:
      "We continuously fine-tune models using real-time feedback loops and validation metrics, ensuring optimal performance, precision, and scalability before integration into your existing infrastructure.",
  },
  {
    id: 4,
    text: "AI System Integration",
    body: "We integrate your AI models seamlessly with your current systems — whether they’re cloud platforms, CRMs, ERPs, or third-party applications — ensuring smooth communication and interoperability across the entire business ecosystem.",
    body1:
      "Our integration process includes developing APIs, microservices, and secure data pipelines to enable real-time insights, automation, and intelligent workflows across your organization.",
  },
  {
    id: 5,
    text: "Deployment and Continuous Improvement",
    body: "Once your AI solution is ready, we handle deployment, monitoring, and performance optimization to ensure a seamless transition from development to production environments.",
    body1:
      "We continuously monitor model performance, retrain algorithms with new data, and introduce updates to keep your AI systems relevant, accurate, and aligned with evolving business goals.",
  },
];
