import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/CoWorkerCircle.svg";
import Code from "../../../../public/images/CoWorkerCode.svg";

const NCXBBX8 = () => {
  const heading = "Fully Integrated Modules";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Our NCX Billing Book software is designed to streamline your business operations with fully integrated modules that work seamlessly together. From inventory management to invoicing and reporting, our software has everything you need to run your business efficiently and effectively.";
  const color = "#d50ac8";

  return (
    <div>
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />{" "}
    </div>
  );
};

export default NCXBBX8;
const data = [
  {
    id: 1,
    header: "Adaptable Features",
    body: "NCX Billing Book is designed to adapt to the unique needs of various industries. Startups, SMEs, and large enterprises can all benefit from its versatile features and user-friendly interface.",
    image: Clock,
  },
  {
    id: 2,
    header: "Easy Integration",
    body: "Integrate NCX Billing Book with your existing tools with little or no coding for both native and iOS devices.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "As your business grows, NCX Billing Book scales with you. Add new users, locations, and features as needed to support your expanding operations.",
    image: Clock,
  },
];
