import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/UberC.svg";

const UberX3 = () => {
  const header = "Many Customers, One Booking Solution.";
  const subheader = "Uberx Ride-Hailing Software Offers";
  const paragraph =
    "School 360 provides a comprehensive management system that helps you efficiently streamline operations and reduce resources and costs within your school organization.";

  const color = "#0F479C";

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

export default UberX3;

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
    title: "Admin Management App",
    body: "Advanced analytics to analyze data and reports to improve and optimize the performance of fleets and drivers. Ensure on-time deliveries with easy navigation",
  },
];
