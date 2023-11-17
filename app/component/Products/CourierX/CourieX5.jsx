import React from "react";
import Product5 from "../ProductProps/Product5";

const CourieX5 = () => {
  const header = "All businesses can use CourierX";
  const subheader = "Get a Jump-start with Our Pre-built Logistics Solution";
  const body =
    "All businesses dealing with pickup, delivery, workforce management and are focused on satisfying their customers";
  return (
    <div>
      <Product5 header={header} subheader={subheader} body={body} />
    </div>
  );
};

export default CourieX5;
