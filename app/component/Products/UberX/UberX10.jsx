import React from "react";
import Product10 from "../ProductProps/Product10";
const UberX10 = () => {
  const header = "Explore More Flexibilities";
  const subheader = "Flexible Solutions to Build Your Ride-Hailing Business";
  const body =
    "RiderX offers a range of flexible solutions to help you build and grow your ride-hailing business. From customizable features to scalable infrastructure, we provide the tools you need to succeed in the competitive ride-hailing market.";
  const color = "#0F479C";
  return (
    <div>
      <Product10
        header={header}
        subheader={subheader}
        body={body}
        color={color}
      />
    </div>
  );
};

export default UberX10;
