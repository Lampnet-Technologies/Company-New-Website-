import React from "react";
import Clock from "../../../../public/images/Clock.svg";
import Service3Props from "../ServicesProps/Service3Props";

const Service3 = () => {
  const heading = "Our Startup Scaleup & MVP Development Services Includes"

  return (
    <Service3Props
      data={data}
      props={heading}
    />
  );
};

export default Service3;

const data = [
  {
    id: 1,
    header: "Validation & Prototype",
    body: "We collaborate with our clients to thoroughly assess their unique business needs and goals before business needs and goals before",
    image: Clock,
  },
  {
    id: 2,
    header: "Industry Research",
    body: "We have a robust quality assurance process to ensure that our solutions meet the highest standards solutions meet the highest standards.",
    image: Clock,
  },
  {
    id: 3,
    header: "Pitch-Ready MVP Product",
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions we provide cutting-edge solutions ",
    image: Clock,
  },
  {
    id: 4,
    header: "Product Roadmap",
    body: "Our agile methodology approach to  ensures tailored solutions that meet clients' specific needs. that meet clients' specific needs.",
    image: Clock,
  },
  {
    id: 5,
    header: "Need Market Ready MVPs?",
    body: "We’re committed to turning your idea into an efficient digital product quickly and within budget product quickly and within budget.",
    button: "Discuss your idea",
  },
  {
    id: 6,
    header: "Full-cycle MVP Engineering",
    body: "We provide ongoing support and maintenance to ensure that our solutions continue to meet our clients' needs.  our solutions continue to meet our.",
    image: Clock,
  },
];
