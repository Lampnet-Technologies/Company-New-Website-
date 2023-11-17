import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Staffing6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNet Solutions for your Training & IT Consulting";
  const paragraph =
    " We understand your idea is unique, and so should be your product, hence we combine our resouces to accelerate the growth of your startup from ideation to execution";
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
    body: "We provide your business with skilled IT professionals who have specialized skills and expertise that are hard to find in the local job market.",
    name: "Access to Global Talent",
    image: Clock,
  },
  {
    id: 2,
    body: "Our staffing solutions are flexible and can be tailored to meet the specific needs of your business, whether you need short-term or long-term staff augmentation.",
    name: "Flexibility",
    image: Clock,
  },
  {
    id: 3,
    body: "Our IT professionals can supplement your existing team or handle entire projects, allowing your business to increase its capacity and scale faster.",
    name: "Increased Productivity",
    image: Clock,
  },
  {
    id: 4,
    body: "Outsourcing your IT staff to us helps your business reduce its risk by ensuring that your IT systems are secure and compliant with industry standards and regulations.",
    name: "Chris Alex",
    image: Clock,
  },
];
