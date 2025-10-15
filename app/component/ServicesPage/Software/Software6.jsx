import React from 'react'
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Software6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for Your Software Product Development";
  const paragraph =
    "At LampNets Solutions, we understand that every idea is unique. That’s why we combine innovation, technical expertise, and agile processes to bring your vision to life — from concept to a fully scalable product.";

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

export default Software6;

const data = [
  {
    id: 1,
    body: "We adopt an agile development process that ensures flexibility, transparency, and faster delivery while adapting to evolving project requirements.",
    name: "Agile Development Process",
    image: Clock,
  },
  {
    id: 2,
    body: "Our solutions are built with scalability in mind, allowing your product to grow effortlessly as your user base and business needs expand.",
    name: "High Scalability",
    image: Clock,
  },
  {
    id: 3,
    body: "We leverage modern frameworks, proven methodologies, and industry best practices to deliver reliable, secure, and high-performing software products.",
    name: "Industry-Standard Solutions",
    image: Clock,
  },
  {
    id: 4,
    body: "Our team continuously innovates and refines our approach to ensure you benefit from the latest technologies and competitive advantages in your market.",
    name: "Continuous Innovation",
    image: Clock,
  },
  {
  id: 5,
  body: "We maintain close collaboration throughout the development cycle, ensuring your feedback shapes every stage of the product journey.",
  name: "Collaborative Partnership",
  image: Clock,
},
{
  id: 6,
  body: "Our post-launch support and maintenance services keep your software running smoothly, secure, and updated with evolving business goals.",
  name: "Dedicated Support & Maintenance",
  image: Clock,
},
];
