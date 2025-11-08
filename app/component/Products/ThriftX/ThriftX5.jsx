import React from "react";
import Product5 from "../ProductProps/Product5";

const ThriftX5 = () => {
  const header = "All Types of Business can Use ThriftX";
  const subheader = "Works For Any Type of Business";
  const body = "ThriftX empowers businesses of all sizes and industries—from e-commerce and retail to travel and hospitality—to process payments seamlessly, securely, and efficiently, both online and offline.";
  const color = "#E47E1F";
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

export default ThriftX5;
