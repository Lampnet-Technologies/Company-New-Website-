import React from "react";
import Product10 from "../ProductProps/Product10";

const MedX10 = () => {
  const header = "Explore More Flexiblities";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "LampNets Solutions work for all use cases and strives to provide top-tier IT solutions to businesses of all sizes and locations in different industries";
  const color = "#3E83EA";
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

export default MedX10;
