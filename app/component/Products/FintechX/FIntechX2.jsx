import React from "react";
import Features1 from "../../../../public/images/FintechA.svg";
import Features2 from "../../../../public/images/FintechB.svg";
import Features3 from "../../../../public/images/FintechC.svg";
import Product2 from "../ProductProps/Product2";

const FIntechX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Banking Functionality –Everything You Need";
  const paragraph =
    "Approved by many regulators, flexible and customizable, API-based, cloud-hosted or on-premise-installed, available in SaaS or perpetual license model, opportunity to purchase source codes.";
  const color = "#453787";

  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default FIntechX2;

const data = [
  {
    id: 1,
    name: "BSA/AML Compliance",
    body: "Ensure full regulatory compliance with built-in BSA/AML tools designed to detect suspicious activities, manage risk, and meet financial industry standards effortlessly.",
    image: Features1,
  },
  {
    id: 2,
    name: "Fraud Management",
    body: "Protect your platform and users with intelligent fraud detection powered by AI. Identify anomalies in real time and secure transactions across all payment channels.",
    image: Features2,
  },
  {
    id: 3,
    name: "Flexibility",
    body: "PayX adapts to your business model — whether banking-as-a-service, remittance, lending, or payments — offering modular, API-first infrastructure for fast scaling.",
    image: Features3,
  },
  {
    id: 4,
    name: "Continuous Innovation",
    body: "PayX evolves with the fintech landscape, delivering regular updates, enhanced security, and the latest technology to keep your platform future-ready.",
    image: Features1,
  },
];
