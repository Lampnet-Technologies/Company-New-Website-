import React from "react";
import Product5 from "../ProductProps/Product5";

const UberX5 = () => {
  const header = "All Ride-hailing Companies Can Use RiderX";
  const subheader = "Welcome To The New Way Of Booking Rides.";
  const body =
    "RiderX is designed to cater to ride-hailing companies of all sizes, from startups to established enterprises. Our scalable platform can be customized to fit your unique business needs, ensuring a seamless experience for both drivers and passengers.";
  const color = "#0F479C";
  return (
    <div>
      {" "}
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default UberX5;
