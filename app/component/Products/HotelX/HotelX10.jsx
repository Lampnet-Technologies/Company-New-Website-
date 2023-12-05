import React from "react";
import Product10 from "../ProductProps/Product10";

const HotelX10 = () => {
  const header = "Explore More Flexiblities";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "LampNets School 360 Solutions  works for all use cases and strives to provide top-tier IT solutions to businesses of all sizes and locations in the learning industry";
  const color = "#34A853";
  return (
    <div>
      {" "}
      <Product10
        header={header}
        subheader={subheader}
        body={body}
        color={color}
      />
    </div>
  );
};

export default HotelX10;
