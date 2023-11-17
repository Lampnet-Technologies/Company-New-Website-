import React from "react";
import Features1 from "../../../../public/images/HotelXa.svg";
import Features2 from "../../../../public/images/HotelXb.svg";
import Features3 from "../../../../public/images/HotelXc.svg";
import Product2 from "../ProductProps/Product2";

const HotelX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Functionality –Everything You Need";
  const paragraph =
    "Approved by Tailored For Success. Most Advanced Features to help you run your restaurant business smoothly and efficiently.";
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

export default HotelX2;

const data = [
  {
    id: 1,
    body: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "Order Management",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Promotional Codes",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Multi Language",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
