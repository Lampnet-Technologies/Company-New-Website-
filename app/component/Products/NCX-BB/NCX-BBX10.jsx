import React from "react";
import Product10 from "../ProductProps/Product10";

const NCXBBX10 = () => {
  const header = "Explore More with NCX-BB";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "LampNets NCX Billing Book is designed to empower businesses of all sizes with the tools they need to succeed. From invoicing and inventory management to customer relationship management, our software has everything you need to streamline your operations and grow your business.";
  const color = "#d50ac8";
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

export default NCXBBX10;
