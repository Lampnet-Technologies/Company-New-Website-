import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Training6 = () => {
  const header = "The Benefits";
  const subHeader = "Why Choose LampNets Solutions for Your Training & IT Consulting";
  const paragraph =
    "At LampNets, we understand that every business is unique. Our tailored training and IT consulting services are designed to empower your team, streamline operations, and accelerate growth from ideation to execution.";

  return (
    <div>
      <Service6Props
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
      />
    </div>
  );
};

export default Training6;

const data = [
  {
    id: 1,
    body: "We optimize your IT systems and processes for improved performance and reliability, implementing solutions tailored to your specific needs.",
    name: "Improved IT Infrastructure",
    image: Clock,
  },
  {
    id: 2,
    body: "We align technology with your business goals to enhance efficiency, boost profitability, and unlock your organization's full potential.",
    name: "Increased Business Performance",
    image: Clock,
  },
  {
    id: 3,
    body: "Our industry experts help your business stay ahead of trends, ensuring long-term competitiveness in a rapidly evolving digital landscape.",
    name: "Competitive Advantage",
    image: Clock,
  },
  {
    id: 4,
    body: "We continuously innovate and refine our solutions to deliver cutting-edge results and ensure lasting business impact.",
    name: "Continuous Innovation",
    image: Clock,
  },
];
