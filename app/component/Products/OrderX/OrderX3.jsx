import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/OrderXC.svg";

const OrderX3 = () => {
  const header = "Many Items, One Inventory Solution.";
  const subheader = "What you can do with OrderX ";
  const paragraph =
    "Manage all your products, orders, and inventory in one place. Whether you're selling online, in-store, or both, OrderX has you covered with a unified platform that simplifies your operations and boosts your efficiency.";
  const color = "#F76C6C";

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

export default OrderX3;

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
    title: "Space App",
    body: " Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
  {
    id: 3,
    image: Features3,
    title: "Admin Management App",
    body: "Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
];
