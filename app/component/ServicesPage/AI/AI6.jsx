import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Ai6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for your Artifical Intelligence Development";
  const paragraph =
    " We understand your idea is unique, and so should be your product, hence we combine our resouces to accelerate the growth of your AI startup from ideation to execution";
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

export default Ai6;

const data = [
  {
    id: 1,
    body: "Our AI integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "Streamlined Integration",
    image: Clock,
  },
  {
    id: 2,
    body: "We prioritize security in our AI development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Enhanced Security",
    image: Clock,
  },
  {
    id: 3,
    body: "We optimize AI performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Increased Efficiency",
    image: Clock,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Olamide Hamina",
    image: Clock,
  },
];
