import React from "react";
import Features1 from "../../../../public/images/FintechA.svg";
import Features2 from "../../../../public/images/FintechB.svg";
import Features3 from "../../../../public/images/FintechC.svg";
import Product2 from "../ProductProps/Product2";

const FIntechX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Banking Functionality –Everything You Need";
  const paragraph =
    "Approved by many regulators, flexible and customizable, API-based, cloud-hosted or on-premise-installed, available in SaaS or perpetual license model, opportunity to purchase source codes.";
  const color = "#453787";

  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default FIntechX2;

const data = [
  {
    id: 1,
    body: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "BSA/AML Compliance",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Fraud Management",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Flexibility",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
