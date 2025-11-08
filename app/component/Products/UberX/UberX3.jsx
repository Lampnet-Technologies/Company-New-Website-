import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/UberC.svg";

const RiderX3 = () => {
  const header = "Many Riders, One Complete Booking Solution";
  const subheader = "RiderX Ride-Hailing Platform Includes";
  const paragraph =
    "RiderX provides an all-in-one suite of applications designed for seamless coordination between customers, drivers, and management teams. Each module is built for performance, scalability, and effortless user experience.";

  const color = "#0F479C";

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

export default RiderX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Customer App",
    body: "Book rides instantly, track drivers in real-time, and make secure payments through multiple gateways. Enjoy a smooth, transparent, and reliable ride experience every time.",
  },
  {
    id: 2,
    image: Features3,
    title: "Driver App",
    body: "Manage trips efficiently with smart route optimization, navigation support, and earnings tracking. Drivers can accept, start, and complete rides with ease.",
  },
  {
    id: 3,
    image: Features3,
    title: "Management Dashboard",
    body: "A powerful admin panel for monitoring rides, managing users, and analyzing performance metrics. Gain full visibility and control over your entire ride-hailing operation.",
  },
];
