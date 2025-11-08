import React from "react";
import Product5 from "../ProductProps/Product5";

const NCXPOSX5 = () => {
  const header = "Perfect for Every Business Type";
  const subheader = "Smart, Simple, and Scalable for Every Industry";
  const body =
    "From retail stores and restaurants to service providers and franchises — NCX Point of Sale helps all businesses manage sales, inventory, and payments effortlessly in one unified system.";
  const color = "#F76C6C";

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

export default NCXPOSX5;

