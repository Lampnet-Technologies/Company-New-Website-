import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/RestaurantC.svg";

const Restaurant3 = () => {
  const header = "Many Customers, One Seamless Experience.";
  const subheader = "What Restaurant 360 Software Offers";
  const paragraph =
    "Restaurant 360 is an all-in-one restaurant management solution designed to simplify daily operations, enhance customer satisfaction, and improve efficiency across your entire business — from ordering to delivery.";
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

export default Restaurant3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Customer App",
    body: "An intuitive app for customers to browse menus, place dine-in or delivery orders, make secure payments, and track their orders in real time.",
  },
  {
    id: 2,
    image: Features3,
    title: "Kitchen & Dispatch App",
    body: "A powerful tool for chefs and delivery staff to manage incoming orders, optimize food preparation, and ensure fast, accurate deliveries every time.",
  },
  {
    id: 3,
    image: Features3,
    title: "Admin Management Dashboard",
    body: "Gain full control of your restaurant operations — manage menus, pricing, inventory, staff performance, and customer insights from one centralized dashboard.",
  },
];
