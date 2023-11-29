"use client";
import React, { useState, useEffect } from "react";
import Service4a from "./Service4a";
import ServicePageWrapper from "./ServicePageWrapper";
import Service4b from "./Service4b";

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
    text: "Product Discovery",
    body: "During the product discovery phase, we work closely with your business to understand your target market, identify key user needs and pain points, and develop a strategy for creating a product that meets those needs.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 2,
    text: "MVP Development & Testing",
    body: "Once we have a clear understanding of your product vision, we move onto the MVP development and testing phase. We work closely with your business to develop a minimum viable product (MVP) that includes the core features and functionalities needed to test your product in the market.",
  },
  {
    id: 3,
    text: "Product Launch",
    body: "With a validated MVP in hand, we move onto the product launch phase. We help your business plan and execute a successful launch that includes go-to-market strategy, branding, and messaging.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 4,
    text: "Product Scale-up",
    body: "Once your product is launched, we work with your business to scale it up. We help you identify growth opportunities, optimize your marketing efforts, and improve user engagement.",
    body1:
      "We work closely with your team to ensure that your product launch is aligned with your business goals and that you have the resources and support needed to succeed.",
  },
  {
    id: 5,
    text: "Technical Support",
    body: "Finally, we offer ongoing technical support to ensure that your product runs smoothly and that any technical issues are addressed quickly. We provide regular maintenance and updates to ensure that your product stays up-to-date with the latest technologies and that it continues to meet the evolving needs of your business and your customers.",
  },
];
