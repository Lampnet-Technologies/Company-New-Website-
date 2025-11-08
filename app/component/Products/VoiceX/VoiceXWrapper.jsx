"use client";
import React, { useState, useEffect } from "react";
import Product9a from "../ProductProps/Product9a";
import Product9b from "../ProductProps/Product9b";
import Product9Wrapper from "../ProductProps/Product9Wrapper";
import StartupScroll from "../../../../public/images/StartupScroll.svg";
import Scroll from "../../../../public/images/Scroll.svg";

const VoiceXWrapper = () => {
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCardData(data);
  };
  useEffect(() => {
    const initialData = data.find((d) => d.id === 1);
    handleCardClick(initialData);
  }, []);

  const wrapperBackgroundColor = "#111827";
  const border = "1px solid #3E83EA";
  const background = "rgba(62, 131, 234, 0.2)";
  const color = "#3E83EA";
  const color2 = "#fff";
  const background2 = "#F76C6C";
  return (
    <Product9Wrapper backgroundColor={wrapperBackgroundColor}>
      <Product9a
        onCardClick={handleCardClick}
        data={data}
        border={border}
        background={background}
        color={color}
        color2={color2}
      />
      <Product9b
        selectedCardData={selectedCardData}
        background2={background2}
      />
    </Product9Wrapper>
  );
};

export default VoiceXWrapper;

const data = [
  {
    id: 1,
    text: "Startups",
    body: "Helping new ventures stand out with affordable, AI-powered voice experiences that accelerate growth and visibility.",
    body1:
      "Integrate lifelike voice narration into your app, website, or MVP to improve user engagement and accessibility.",
    body2:
      "Use VoiceX APIs to add multilingual support, automate voice responses, and enhance brand presence from day one.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 2,
    text: "SMBs",
    body: "Empowering small and medium businesses with intelligent voice tools to streamline communication and improve customer interaction.",
    body1:
      "Add dynamic voice assistants or auto-responders to handle FAQs, bookings, or feedback efficiently.",
    body2:
      "Generate training materials, marketing voice-overs, and automated announcements in minutes with VoiceX.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 3,
    text: "Franchise",
    body: "Unifying multi-location brands with consistent voice identity and AI-driven communication systems.",
    body1:
      "Create localized voice messages and customer greetings that reflect your brand tone in different regions.",
    body2:
      "Monitor voice engagement analytics across branches to ensure consistency and customer satisfaction.",
    image: StartupScroll,
    imagea: Scroll,
  },
  {
    id: 4,
    text: "Enterprises",
    body: "Delivering enterprise-grade, secure, and scalable voice solutions that enhance global communication and accessibility.",
    body1:
      "Deploy custom voice AI models for internal training, customer service, and multilingual support.",
    body2:
      "Integrate VoiceX across departments to automate calls, provide real-time narration, and improve workflow efficiency.",
    image: StartupScroll,
    imagea: Scroll,
  },
];
