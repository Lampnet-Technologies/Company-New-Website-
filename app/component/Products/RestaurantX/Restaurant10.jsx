import React from "react";
import Product10 from "../ProductProps/Product10";

const Restaurant10 = () => {
  const header = "Explore More Flexibilities";
  const subheader = "Your Restaurant, Our Technology — Built for Growth";
  const body =
    "LampNet’s Restaurant 360 Solution is designed to adapt to every business model, empowering restaurants of all sizes and types with innovative, reliable, and scalable digital tools to drive success in the food industry.";
  const color = "#AB0E12";
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

export default Restaurant10;
