"use client";
import React, { useState, useEffect } from "react";
import HomePageWrapper from "./HomePageWrapper";
import HomePage11 from "./HomePage11";
import HomePage11a from "./HomePage11a";
import Image from "next/image";
import Services1 from "../../../public/images/Services1.svg";
import Services2 from "../../../public/images/Services2.svg";
import Services3 from "../../../public/images/Services3.svg";
import Services4 from "../../../public/images/Services4.svg";
import Services5 from "../../../public/images/Services5.svg";
import Services6 from "../../../public/images/Services6.svg";
import Services7 from "../../../public/images/Services7.svg";
import Services8 from "../../../public/images/Services8.svg";
import arrowOne from "../../../public/images/arrowOne.svg";
import arrowTwo from "../../../public/images/arrowTwo.svg";
import Servicesa1 from "../../../public/images/Servicesa1.svg";
import Servicesa2 from "../../../public/images/Servicesa2.svg";
import Servicesa3 from "../../../public/images/Servicesa3.svg";
import Servicesa4 from "../../../public/images/Servicesa4.svg";
import Servicesa5 from "../../../public/images/Servicesa5.svg";
import Servicesa6 from "../../../public/images/Servicesa6.svg";
import Servicesa7 from "../../../public/images/Servicesa7.svg";
import Servicesa8 from "../../../public/images/Servicesa8.svg";
import Servicesa9 from "../../../public/images/Servicesa9.svg";
import Servicesa10 from "../../../public/images/Servicesa10.svg";
import Servicesa11 from "../../../public/images/Servicesa11.svg";
import Servicesa12 from "../../../public/images/Servicesa12.svg";
import Servicesa13 from "../../../public/images/Servicesa13.svg";
import Servicesa14 from "../../../public/images/Servicesa14.svg";
import Servicesa15 from "../../../public/images/Servicesa15.svg";
import Servicesa16 from "../../../public/images/Servicesa16.svg";
import Servicesa17 from "../../../public/images/Servicesa17.svg";
import Servicesa18 from "../../../public/images/Servicesa18.svg";
import Servicesa19 from "../../../public/images/Servicesa19.svg";
import Servicesa20 from "../../../public/images/Servicesa20.svg";
import Servicesa21 from "../../../public/images/Servicesa21.svg";
import Servicesa22 from "../../../public/images/Servicesa22.svg";
import Servicesa23 from "../../../public/images/Servicesa23.svg";
import Servicesa24 from "../../../public/images/Servicesa24.svg";
import Servicesa25 from "../../../public/images/Servicesa25.svg";
import Servicesa26 from "../../../public/images/Servicesa26.svg";
import Servicesa27 from "../../../public/images/Servicesa27.svg";
import Servicesa28 from "../../../public/images/Servicesa28.svg";
import Servicesa29 from "../../../public/images/Servicesa29.svg";
import Servicesa30 from "../../../public/images/Servicesa30.svg";
import Servicesa31 from "../../../public/images/Servicesa31.svg";
import Servicesa32 from "../../../public/images/Servicesa32.svg";

const HomeWrapper = () => {
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
    <HomePageWrapper>
      <HomePage11 onCardClick={handleCardClick} data={data} />
      <HomePage11a selectedCardData={selectedCardData} />
    </HomePageWrapper>
  );
};

export default HomeWrapper;

const data = [
  {
    id: 1,
    text: "Cloud Solution & Manangement",
    body: "We provide agile cloud services that help businesses drive innovation and growth. Our managed IT strategies and processes help manage their cloud infrastructure, and ensure data security and regulatory compliance.  With our stable and cost-effective  IT infrastructure, we enable businesses focus on core operations while we handle technical details with scalable solutions.",
    image: Services1,
    imagea: Servicesa1,
    texta: "Cloud Management",
    imageb: Servicesa2,
    textb: "Managed Security",
    imagec: Servicesa3,
    textc: "Managed DeveOps",
    imaged: Servicesa4,
    textd: "Managed Support",
  },
  {
    id: 2,
    text: "Startup Scale-Up & MVP Development",
    body: "Leverage our expertise to increase your chances of securing funding by effectively pitching your product with a successful MVP. Develop a competitive edge in securing funding with our expert MVP app development team. Our fast-to-release approach delivers a satisfactory usable MVP in just 3-4 months, outperforming idea-only competitors. ",
    image: Services2,
    imagea: Servicesa5,
    texta: "Validation & Prototype",
    imageb: Servicesa6,
    textb: "Industry Research",
    imagec: Servicesa7,
    textc: "MVP Development",
    imaged: Servicesa8,
    textd: "Product Scale-Up",
  },
  {
    id: 3,
    text: "Software Product Development",
    body: "Our team of experienced developers uses the latest technologies and agile methodologies to deliver high-quality software products that meet your business needs. We understand that every project is unique, and we tailor our solutions to ensure we deliver products that meet your specific requirements.",
    image: Services3,
    imagea: Servicesa9,
    texta: "Fintech Development",
    imageb: Servicesa10,
    textb: "Mobile App Development",
    imagec: Servicesa11,
    textc: "Enterprise Software Devlopment",
    imaged: Servicesa12,
    textd: "Web/Cloud App Development",
  },
  {
    id: 4,
    text: "API Development & Integration",
    body: "Bridge the gaps between your disparate systems, extend your business capabilities and ensure stellar performance with LampNet Solutions API development and integration services. We help your team work efficiently by enabling seamless data sharing across systems, streamlined businesses processes and enhanced collaboration.",
    image: Services4,
    imagea: Servicesa13,
    texta: "Custom API Development",
    imageb: Servicesa14,
    textb: "Third Party API Integration",
    imagec: Servicesa15,
    textc: "Cloud API Integration & Dev",
    imaged: Servicesa16,
    textd: "Microservice Architecture ",
  },
  {
    id: 5,
    text: "White Label App Customizations",
    body: "We provide a seamless integration process, allowing businesses to easily incorporate our software into their existing infrastructure to match their unique brand and user needs, without the need for additional development resources. Our white label solutions also come with reliable technical support to ensure a smooth experience for our clients and their end-users.",
    image: Services5,
    imagea: Servicesa17,
    texta: "Customizable User Interface",
    imageb: Servicesa18,
    textb: "Branded Mobile Apps",
    imagec: Servicesa19,
    textc: "Third Party API Integration",
    imaged: Servicesa20,
    textd: "Technical Support",
  },
  {
    id: 6,
    text: "Training & IT Consultation",
    body: "We provide world-class and professional trainings through our industry certified trainers at the LampNet Institute of Technology.  We also offer expert IT consultation to help businesses develop and implement an effective IT strategy. We assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
    image: Services6,
    imagea: Servicesa21,
    texta: "Training & Certifications",
    imageb: Servicesa22,
    textb: "IT System Evaluation",
    imagec: Servicesa23,
    textc: "Project Management",
    imaged: Servicesa24,
    textd: "Data Management & Security",
  },
  {
    id: 7,
    text: "UI/UX Design ",
    body: "We are a creative in-house design agency that specializes in crafting outstanding customer experiences. Our human-centric designs help businesses thrive by forging strong customer relationships and increasing customer satisfaction by 2X. Trust us to deliver optimal experiences that build strong customer relationships and drive business growth.",
    image: Services7,
    imagea: Servicesa25,
    texta: "Wireframing & Prototyping",
    imageb: Servicesa26,
    textb: "Website Design",
    imagec: Servicesa27,
    textc: "Mobile Design",
    imaged: Servicesa28,
    textd: "Branding",
  },
  {
    id: 8,
    text: "Outsourcing & Team Augmentation",
    body: "We offer experienced top-notch talent with all the necessary skills to join your in-house team and work on your projects under your direct management. By filling skill and resource gaps in your team, we accelerate project progress and help you meet your goals faster. Trust us to provide the right talent and skills to drive your success.",
    image: Services8,
    imagea: Servicesa29,
    texta: "IT Staff Outsourcing",
    imageb: Servicesa30,
    textb: "Team Augumentation",
    imagec: Servicesa31,
    textc: "Project-Based Outsourcing",
    imaged: Servicesa32,
    textd: "Remote Staffing",
  },
];
