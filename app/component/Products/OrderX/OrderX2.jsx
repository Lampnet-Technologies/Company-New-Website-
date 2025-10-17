import React from "react";
import Features1 from "../../../../public/images/OrderXA.svg";
import Features2 from "../../../../public/images/OrderXB.svg";
import Features3 from "../../../../public/images/OrderXC.svg";
import Product2 from "../ProductProps/Product2";

const OrderX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Functionality – Everything You Need";
  const paragraph =
    "Our platform is packed with features designed to streamline your operations, enhance productivity, and drive growth. From intuitive user interfaces to powerful analytics tools, we provide everything you need to succeed in today's competitive market.";
  const color = "#F76C6C";

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

export default OrderX2;

const data = [
  {
    id: 1,
    name: "Custom Fields",
    body: "Easily tailor your order management process with customizable fields that adapt to your unique workflows, ensuring every detail fits your business needs.",
    image: Features1,
  },
  {
    id: 2,
    name: "Activity History",
    body: "Track every order movement and user interaction with detailed activity logs—giving you complete visibility and control over your entire fulfillment process.",
    image: Features2,
  },
  {
    id: 3,
    name: "Label Generation",
    body: "Automatically generate and print shipping labels for multiple carriers in seconds, reducing manual effort and eliminating fulfillment errors.",
    image: Features3,
  },
  {
    id: 4,
    name: "Smart Notifications",
    body: "Keep customers and teams informed in real time with automated alerts for order confirmations, shipping updates, and delivery statuses.",
    image: Features1,
  },
];
