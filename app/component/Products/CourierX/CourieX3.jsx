import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Features3.svg";

const CourieX3 = () => {
  const header = "One Platform, All Deliveries";
  const subheader = "Boost Your Delivery Management and Enjoy Increase ROI ";
  const paragraph =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
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

export default CourieX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Customer App",
    body: "On demand delivery app for customer’s orders and real time delivery tracking. Payment through multiple gateways are also available",
  },
  {
    id: 2,
    image: Features3,
    title: "Driver App",
    body: " Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
  {
    id: 3,
    image: Features3,
    title: "Delivery Management App",
    body: "Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
];
