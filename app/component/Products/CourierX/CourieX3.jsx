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
    body: "A seamless app for customers to place on-demand delivery orders, track their parcels in real time, and make secure payments through multiple gateways.",
  },
  {
    id: 2,
    image: Features3,
    title: "Driver App",
    body: "A user-friendly mobile app that helps drivers receive tasks, navigate optimized routes, manage deliveries efficiently, and update order statuses instantly.",
  },
  {
    id: 3,
    image: Features3,
    title: "Delivery Management Dashboard",
    body: "A centralized platform for dispatchers and administrators to assign deliveries, track driver performance, monitor routes, and analyze logistics data in real time.",
  },
];

