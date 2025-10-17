import React from "react";
import Product10 from "../ProductProps/Product10";

const EstateX10 = () => {
  const header = "Explore More Flexibility";
  const subheader = "Building Your Real Estate Business Is Our Passion";
  const body =
    "EstateX is designed to adapt to every use case, delivering top-tier property management and automation solutions for businesses of all sizes and locations within the real estate industry.";
  const color = "#AB0E12";
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

export default EstateX10;
