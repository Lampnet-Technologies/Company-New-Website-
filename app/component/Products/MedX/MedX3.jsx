import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Medx3.svg";

const MedX3 = () => {
  const header = "One Platform, All Deliveries";
  const subheader =
    "Capture untapped opportunities with MedX intuitive features ";
  const paragraph =
    "MedX is a highly customizable online food ordering and delivery system that enables ease of use and seamless management.";
  const color = "#3E83EA";

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

export default MedX3;

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
