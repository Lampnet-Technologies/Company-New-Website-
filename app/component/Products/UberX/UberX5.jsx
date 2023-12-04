import React from "react";
import Product5 from "../ProductProps/Product5";

const UberX5 = () => {
  const header = "All Ride-hailing Companies Can Use UberX";
  const subheader = "Welcome To The New Way Of Booking Rides.";
  const body =
    "No matter what type of business you run, OrderX allows you to get your business online in minutes.";
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
