import React from "react";
import Product10 from "../ProductProps/Product10";

const NCXPOSX10 = () => {
  const header = "Explore More Flexibilities";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "From retail stores and restaurants to service providers and franchises — NCX Point of Sale helps all businesses manage sales, inventory, and payments effortlessly in one unified system.";
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

export default NCXPOSX10;
