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
    text: "Ideation",
    body: "Our team at Lampnet Solutions works closely with your business to identify your goals and target audience, as well as your specific requirements for the app. We believe that a thorough understanding of your business needs and objectives is essential to developing an effective white label app that aligns with your brand and meets your customers' needs.",
    body1:
      "Through this collaborative process, we aim to ensure that your white label app is not only functional and user-friendly but also meets the specific needs of your business and target audience.",
  },
  {
    id: 2,
    text: "Design",
    body: "In the design phase, we prioritize user experience by creating an intuitive and engaging interface. Our team will work with your business to ensure that the design aligns with your brand identity and resonates with your target audience. We also take into account factors such as device compatibility and screen sizes to ensure that the app will function seamlessly across multiple platforms.",
    body1:
      "We understand that the visual design of your app is crucial to its success. That's why we use the latest design tools and techniques to ensure your white label app is aesthetically pleasing and easy to use.",
  },
  {
    id: 3,
    text: "Development",
    body: "During the development phase, our team of experienced developers work on implementing the app's features and functionalities based on the agreed-upon design and specifications. We use the latest technologies and programming languages to ensure that the app is built to the highest standards of quality, performance, and security.",
    body1: "Throughout the development phase, we provide regular updates and progress reports to ensure that your business is fully informed about the development of your white label app.",
  },
  {
    id: 4,
    text: "Testing",
    body: "During the testing phase, we thoroughly test the white label app to ensure that it functions as intended and is user-friendly. We use a combination of automated and manual testing methods to identify any potential bugs or errors in the app. Our team of experienced QA specialists works to ensure that the app meets your business requirements and provides a seamless user experience.",
    body1:
      "We understand the importance of delivering a high-quality app that is free of issues, and we work diligently to identify and address any problems during the testing phase.",
  },
  {
    id: 5,
    text: "Deployment",
    body: "During the deployment phase, we work to make the app available to your target audience, and provide any necessary assistance to help with the submission and approval process. Our team also offers ongoing support to ensure your white label app continues to function well and meet your business goals.",
  },
];
