import React from "react";
import Product10 from "../ProductProps/Product10";

const OrderX10 = () => {
  const header = "Explore More Flexiblities";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "At OrderX, we are dedicated to providing you with the tools and support you need to grow and succeed in the ever-evolving world of e-commerce. Discover the endless possibilities with our platform and take your business to new heights.";
  const color = "#F76C6C";
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

export default OrderX10;
