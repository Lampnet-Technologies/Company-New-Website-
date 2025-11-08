import React from "react";
import Product5 from "../ProductProps/Product5";

const NCXBBX5 = () => {
  const header = "All Spaces can Use NCX Billing Book Software";
  const subheader = "Flexible enough to handle businesses across retail, services, and more.";
  const body =
    "NCX Billing Book is designed to adapt to the unique needs of various industries. Startups, SMEs, and large enterprises can all benefit from its versatile features and user-friendly interface.";
  const color = "#d50ac8";
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

export default NCXBBX5;
