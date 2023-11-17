import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Cloud6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for your Cloud Solutions & Mangement";
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

export default Cloud6;

const data = [
  {
    id: 1,
    body: "We provide access to cloud resources on a pay-as-you-go basis, without having to invest in your own infrastructure and cut costs by eliminating redundant data. ",
    name: "Reduced Cost of Ownership",
    image: Clock,
  },
  {
    id: 2,
    body: "We offer cloud infrastructure that enables seamless deployment of new products and resource allocation to handle sudden increases in demand.",
    name: "High Scalability",
    image: Clock,
  },
  {
    id: 3,
    body: "We provide reliable and efficient industry-standard software and tools that enable your business to focus on their core competencies",
    name: "Industry-standard solutions",
    image: Clock,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Clock,
  },
];
