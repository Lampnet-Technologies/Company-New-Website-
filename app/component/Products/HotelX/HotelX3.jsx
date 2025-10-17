import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Features3.svg";

const HotelX3 = () => {
  const header = "Many Customers, One Simple Solution.";
  const subheader = "HotelX Management Software Offers";
  const paragraph =
    "HotelX is a comprehensive hospitality management system designed to help hotels and other accommodation providers operate efficiently. Manage bookings, guest information, billing, and reporting — all from one intuitive platform.";
  const color = "#34A853";

  return (
    <div>
      {" "}
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

export default HotelX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Guest App",
    body: "Allow guests to make bookings, view room availability, request services, and manage their stay seamlessly from a user-friendly mobile app.",
  },
  {
    id: 2,
    image: Features3,
    title: "Staff & Operations App",
    body: "Equip your hotel staff with tools to manage room assignments, housekeeping, maintenance, and service requests efficiently in real-time.",
  },
  {
    id: 3,
    image: Features3,
    title: "Admin Dashboard",
    body: "Centralize hotel management with a comprehensive dashboard to monitor bookings, revenue, guest feedback, and operational performance.",
  },
];
