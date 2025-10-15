import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Api6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for Your API Development & Integration";
  const paragraph =
    "Your systems deserve seamless connectivity. At LampNets Solutions, we design and implement robust API architectures that unify platforms, automate workflows, and enhance overall business efficiency. From third-party integrations to custom API development, we help your digital ecosystem work smarter together.";

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

export default Api6;

const data = [
  {
    id: 1,
    body: "We enable seamless communication between applications through secure, well-documented, and scalable APIs—ensuring your platforms exchange data efficiently and reliably.",
    name: "Streamlined Integration",
    image: Clock,
  },
  {
    id: 2,
    body: "Our APIs are built with advanced authentication, encryption, and compliance standards to safeguard your business data and protect against unauthorized access.",
    name: "Enhanced Security",
    image: Clock,
  },
  {
    id: 3,
    body: "We design APIs for high performance and scalability—allowing your business to automate repetitive tasks, boost productivity, and deliver faster digital experiences.",
    name: "Increased Efficiency",
    image: Clock,
  },
  {
    id: 4,
    body: "We continuously monitor, test, and optimize your APIs to ensure they remain reliable, future-proof, and aligned with the latest industry standards.",
    name: "Continuous Optimization",
    image: Clock,
  },
];
