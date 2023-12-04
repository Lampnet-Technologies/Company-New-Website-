import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/FintechCircle.svg";

const FIntechX3 = () => {
  const header = "Many Challenges, One Banking Solution.";
  const subheader = "Financial Institutions Like Yours Enjoy Fintech 360 ";
  const paragraph =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
  const color = "#453787";

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

export default FIntechX3;

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
