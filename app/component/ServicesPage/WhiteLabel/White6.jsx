import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const White6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for Your White Label App Customization";
  const paragraph =
    "At LampNets Solutions, we help businesses accelerate their digital transformation with fully customizable white-label apps. Our solutions empower you to launch high-quality, branded applications faster — without the cost or complexity of building from scratch.";

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

export default White6;

const data = [
  {
    id: 1,
    body: "We tailor every aspect of your white-label app to reflect your brand identity, ensuring a consistent and professional experience for your customers.",
    name: "Enhanced Brand Identity",
    image: Clock,
  },
  {
    id: 2,
    body: "Our white-label solutions significantly reduce development time and costs, allowing you to launch premium apps without the heavy upfront investment.",
    name: "Cost-Effective Development",
    image: Clock,
  },
  {
    id: 3,
    body: "Launch your app faster and stay ahead of competitors with our pre-built, customizable frameworks designed for speed and scalability.",
    name: "Faster Time-to-Market",
    image: Clock,
  },
  {
    id: 4,
    body: "We continuously update and enhance our solutions to ensure your app remains modern, secure, and compatible with the latest technologies.",
    name: "Ongoing Innovation & Support",
    image: Clock,
  },
];
