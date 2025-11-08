import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Ai6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for Your Artificial Intelligence Development";
  const paragraph =
    "We understand that every idea is unique — and so should be your product. That’s why we combine innovation, expertise, and cutting-edge technology to accelerate the growth of your AI solutions from ideation to execution.";

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
    body: "Our AI integration services enable seamless connection between systems — including third-party applications, databases, and enterprise software — ensuring smooth data exchange and improved collaboration.",
    name: "Streamlined Integration",
    image: Clock,
  },
  {
    id: 2,
    body: "We prioritize data protection at every stage of AI development and integration. Our security-first approach ensures your systems remain safe from vulnerabilities and unauthorized access.",
    name: "Enhanced Security",
    image: Clock,
  },
  {
    id: 3,
    body: "Our AI-driven solutions are optimized for speed, accuracy, and scalability — helping your business automate workflows, improve decision-making, and reduce operational costs.",
    name: "Increased Efficiency",
    image: Clock,
  },
  {
    id: 4,
    body: "We continuously evolve our processes and technology to stay ahead of emerging AI trends, ensuring your business always benefits from innovative, future-ready solutions.",
    name: "Continuous Innovation",
    image: Clock,
  },
];
