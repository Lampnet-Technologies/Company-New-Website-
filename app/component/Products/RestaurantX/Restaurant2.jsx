import React from "react";
import Features1 from "../../../../public/images/RestaurantA.svg";
import Features2 from "../../../../public/images/RestaurantB.svg";
import Features3 from "../../../../public/images/RestaurantC.svg";
import Product2 from "../ProductProps/Product2";

const Restaurant2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core  Functionality – Everything You Need";
  const paragraph =
    "Approved by Tailored For Success. Most Advanced Features to help you run your restaurant business smoothly and efficiently.";
  const color = "#AB0E12";
  return (
    <div>
      {" "}
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

export default Restaurant2;

const data = [
  {
    id: 1,
    body: "Manage dine-in, takeout, and delivery orders seamlessly in one centralized system. Track order status in real time to ensure faster service and happier customers.",
    name: "Order Management",
    image: Features1,
  },
  {
    id: 2,
    body: "Create custom discount codes, loyalty offers, and seasonal campaigns to increase repeat visits and strengthen customer relationships effortlessly.",
    name: "Promotional & Loyalty Programs",
    image: Features2,
  },
  {
    id: 3,
    body: "Serve customers from different regions with ease. Our multilingual interface ensures your restaurant is accessible and user-friendly for all audiences.",
    name: "Multi-Language Support",
    image: Features3,
  },
  {
    id: 4,
    body: "Gain deep insights into sales trends, customer preferences, and staff performance with advanced analytics — empowering data-driven decision-making.",
    name: "Smart Analytics Dashboard",
    image: Features1,
  },
];
