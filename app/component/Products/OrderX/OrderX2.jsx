import React from "react";
import Features1 from "../../../../public/images/OrderXA.svg";
import Features2 from "../../../../public/images/OrderXB.svg";
import Features3 from "../../../../public/images/OrderXC.svg";
import Product2 from "../ProductProps/Product2";

const OrderX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core  Functionality –Everything You Need";
  const paragraph =
    "Approved by many regulators, flexible and customizable, API-based, cloud-hosted or on-premise-installed, available in SaaS or perpetual license model, opportunity to purchase source codes.";
  const color = "#F76C6C";

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

export default OrderX2;

const data = [
  {
    id: 1,
    body: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "Custom Fields",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Activity History",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Label Generations",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
