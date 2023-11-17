import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg"

const Service6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for your Startup,Scale-up & MVP Development";
  const paragraph =
    "  We understand your idea is unique, and so should be your product, hence we combine our resources to help your business bring your product vision to life and achieve long-term success.";

  return (
    <div>
      <Service6Props
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data= {data}
      />
    </div>
  );
};

export default Service6;

const data = [
  {
    id: 1,
    body: "We collaborate with our clients to thoroughly assess their unique business needs and goals before business needs and goals before ",
    name: "Reduced Risk",
    image: Clock,
  },
  {
    id: 2,
    body: "We have a robust quality assurance process to ensure that our solutions meet the highest standards solutions meet the highest standards.",
    name: "Quick Product Launch",
    image: Clock,
  },
  {
    id: 3,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Improved Product-Market Fit",
    image: Clock,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Clock,
  },
];
