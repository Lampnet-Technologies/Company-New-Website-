import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/ThriftXCircle.svg";
import Code from "../../../../public/images/ThriftXCode.svg";

const ThriftX8 = () => {
  const heading = "Fully Customizable to Meet Your Asset Management Needs";
  const mail = "Stay Ahead of the Competition";
  const paragraph1 =
    "ThriftX white-label banking software offers a suite of configurable modules designed to handle core financial services efficiently, giving you full control and flexibility.";
  const color = "#E47E1F";

  return (
    <div>
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />
    </div>
  );
};

export default ThriftX8;

const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Fully configurable features allow you to tailor the platform to your business model and operational needs.",
    image: Clock,
  },
  {
    id: 2,
    header: "Source Code Ownership",
    body: "Gain complete control over your platform with source code access, enabling seamless integration and future enhancements.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Easily scale your financial operations as your business grows, ensuring sustainable growth and long-term success.",
    image: Clock,
  },
];
