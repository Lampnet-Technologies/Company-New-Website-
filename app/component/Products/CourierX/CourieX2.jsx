import React from "react";
import Features1 from "../../../../public/images/Features1.svg";
import Features2 from "../../../../public/images/Features2.svg";
import Features3 from "../../../../public/images/Features3.svg";
import Product2 from "../ProductProps/Product2";

const CourieX2 = () => {
  const header = "The Features";
  const subHeader = "The Most Versatile Logistics & Delivery Management Platform";
  const paragraph =
    "CourieX is designed to streamline logistics operations, empower delivery teams, and enhance visibility across every stage of your supply chain. Our robust features ensure faster, smarter, and more efficient delivery management for businesses of all sizes.";
  const color = "#54BD95";

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

export default CourieX2;

const data = [
  {
    id: 1,
    name: "Real-Time Tracking",
    body: "Monitor every shipment with GPS-enabled tracking and live updates. Gain full visibility into delivery routes, driver status, and customer notifications.",
    image: Features1,
  },
  {
    id: 2,
    name: "Smart Route Optimization",
    body: "Automatically generate the most efficient delivery routes using AI-powered algorithms that reduce fuel costs and delivery time.",
    image: Features2,
  },
  {
    id: 3,
    name: "Multi-Vendor & Fleet Management",
    body: "Easily manage multiple vendors, drivers, and fleets in one dashboard. Assign tasks, track performance, and streamline communication effortlessly.",
    image: Features3,
  },
  {
    id: 4,
    name: "Automated Dispatch & Notifications",
    body: "Simplify logistics operations with automated dispatching, order assignment, and instant alerts for customers and drivers.",
    image: Features1,
  },
  {
    id: 5,
    name: "Analytics & Performance Dashboard",
    body: "Access powerful analytics that track key delivery metrics, customer satisfaction, and team productivity to make data-driven decisions.",
    image: Features2,
  },
];
