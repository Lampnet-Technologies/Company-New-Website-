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
    body: "We provide access to cloud resources on a pay-as-you-go basis, without having to invest in your own infrastructure and cut costs by eliminating redundant data.",
    name: "Reduced Cost of Ownership",
    image: Clock,
  },
  {
    id: 2,
    body: "Scale your resources up or down as your business needs change. Our flexible cloud infrastructure ensures your systems stay efficient during high or low demand periods.",
    name: "Scalability & Flexibility",
    image: Clock,
  },
  {
    id: 3,
    body: "With advanced backup solutions and multi-layered security protocols, your business data stays protected from breaches, downtime, or data loss incidents.",
    name: "Enhanced Security & Reliability",
    image: Clock,
  },
  {
    id: 4,
    body: "Access your applications and data from anywhere, anytime. Our optimized cloud architecture ensures speed, performance, and collaboration across global teams.",
    name: "Improved Accessibility & Performance",
    image: Clock,
  },
];
