import React from "react";
import Features1 from "../../../../public/images/HotelXa.svg";
import Features2 from "../../../../public/images/HotelXb.svg";
import Features3 from "../../../../public/images/HotelXc.svg";
import Product2 from "../ProductProps/Product2";

const HotelX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Functionality – Everything You Need";
  const paragraph =
    "HotelX is a comprehensive hospitality management system designed to help hotels and other accommodation providers operate efficiently. Manage bookings, guest information, billing, and reporting — all from one intuitive platform.";
  const color = "#34A853";

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

export default HotelX2;

const data = [
  {
    id: 1,
    name: "Booking Management",
    body: "Easily manage room reservations, check-ins, and check-outs with a streamlined booking system that keeps operations efficient and accurate.",
    image: Features1,
  },
  {
    id: 2,
    name: "Promotions & Discounts",
    body: "Create and manage promotional offers, discount codes, and special packages to attract guests and boost occupancy rates.",
    image: Features2,
  },
  {
    id: 3,
    name: "Multi-Language Support",
    body: "Provide a seamless experience for international guests with multilingual support across your platform and guest communications.",
    image: Features3,
  },
  {
    id: 4,
    name: "Advanced Reporting",
    body: "Gain insights into bookings, revenue, guest preferences, and operational performance with real-time analytics and detailed reports.",
    image: Features1,
  },
];
