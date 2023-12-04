import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Features3.svg";

const SchoolX3 = () => {
  const header = "One Platform, All Features";
  const subheader = "Schools like yours love School 360. It is designed for ";
  const paragraph =
    "School 360 provides a comprehensive management system that helps you efficiently streamline operations and reduce resources and costs within your school organization.";
  const color = "#AB0E12";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default SchoolX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Students",
    body: "On demand delivery app for customer’s orders and real time delivery tracking. Payment through multiple gateways are also available",
  },
  {
    id: 2,
    image: Features3,
    title: "Parents",
    body: " Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
  {
    id: 3,
    image: Features3,
    title: "School Administrator",
    body: "Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
];
