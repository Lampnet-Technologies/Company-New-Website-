import React from "react";
import Product5 from "../ProductProps/Product5";

const EstateX5 = () => {
  const header = "EstateX Works for Every Business";
  const subheader = "Tailored Solutions for Every Asset Class";
  const body =
    "Each asset class has its own challenges and workflows. EstateX is designed to adapt seamlessly, empowering you to manage every type of property with precision and ease.";
  const color = "#AB0E12";
  return (
    <div>
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default EstateX5;
