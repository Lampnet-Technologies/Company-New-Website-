import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/ThriftCircle.svg";

const ThriftX3 = () => {
  const header = "Many Challenges, One Investment Solution.";
  const subheader = "Investment management software for your needs ";
  const paragraph =
    "School 360 provides a comprehensive management system that helps you efficiently streamline operations and reduce resources and costs within your school organization.";
  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
      />
    </div>
  );
};

export default ThriftX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Increase Sales",
    body: "On demand delivery app for customer’s orders and real time delivery tracking. Payment through multiple gateways are also available",
  },
  {
    id: 2,
    image: Features3,
    title: "Simple Integration",
    body: " Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
  {
    id: 3,
    image: Features3,
    title: "Promote Your Brand",
    body: "Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
];
