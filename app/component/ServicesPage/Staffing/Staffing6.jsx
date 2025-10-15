import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Staffing6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for Your IT Staffing and Resource Augmentation";
  const paragraph =
    "At LampNets, we connect you with highly skilled IT professionals to help your business scale efficiently. Our staffing solutions are flexible, reliable, and designed to meet your evolving project and operational needs.";

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

export default Staffing6;

const data = [
  {
    id: 1,
    body: "Gain access to a pool of experienced IT professionals with specialized skills that may be difficult to find locally.",
    name: "Access to Global Talent",
    image: Clock,
  },
  {
    id: 2,
    body: "Our flexible staffing options allow you to scale your team up or down based on project demands — whether short-term or long-term.",
    name: "Flexible Workforce Solutions",
    image: Clock,
  },
  {
    id: 3,
    body: "Boost productivity by integrating skilled professionals who can support your in-house team or manage entire projects independently.",
    name: "Increased Productivity and Efficiency",
    image: Clock,
  },
  {
    id: 4,
    body: "Reduce operational risks with our reliable, compliant, and security-focused staffing solutions that meet industry standards.",
    name: "Reduced Risk and Compliance Assurance",
    image: Clock,
  },
];
