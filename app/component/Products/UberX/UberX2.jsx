import React from "react";
import Features1 from "../../../../public/images/UberA.svg";
import Features2 from "../../../../public/images/UberB.svg";
import Features3 from "../../../../public/images/UberC.svg";
import Product2 from "../ProductProps/Product2";

const UberX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core  Functionality –Everything You Need";
  const paragraph =
    "Approved by many regulators, flexible and customizable, API-based, cloud-hosted or on-premise-installed, available in SaaS or perpetual license model, opportunity to purchase source codes.";
  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
      />
    </div>
  );
};

export default UberX2;

const data = [
  {
    id: 1,
    body: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "Reviews & Rating",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Ride-sharing",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Split-Fee Payment",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
