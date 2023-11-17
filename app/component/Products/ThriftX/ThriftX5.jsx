import React from "react";
import Product5 from "../ProductProps/Product5";

const ThriftX5 = () => {
  const header = "All Types of Business can Use Fintech 360";
  const subheader = "A Platform Built to Simplify Complexity";
  const body =
    "Businesses of all sizes and types, from e-commerce platforms to travel and hospitality companies- use Fintech 360 to process online and offline payments quickly and securely.";
  return (
    <div>
      {" "}
      <Product5 header={header} subheader={subheader} body={body} />
    </div>
  );
};

export default ThriftX5;
