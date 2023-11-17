import React from "react";
import Features1 from "../../../../public/images/Features1.svg";
import Features2 from "../../../../public/images/Features2.svg";
import Features3 from "../../../../public/images/Features3.svg";
import Product2 from "../ProductProps/Product2";

const CourieX2 = () => {
  const header = "The Features";
  const subHeader =
    "The Most Versatile Logistics & Delivery Management Platform";
  const paragraph =
    "We understand your idea is unique, and so should be your product, hence we combine our resouces to accelerate the growth of your startup from ideation to execution";
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

export default CourieX2;

const data = [
  {
    id: 1,
    body: "Our API integration services help your business integrate systems seamlessly, including third-party applications, databases, and software",
    name: "Streamlined Integration",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Enhanced Security",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Increased Efficiency",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
