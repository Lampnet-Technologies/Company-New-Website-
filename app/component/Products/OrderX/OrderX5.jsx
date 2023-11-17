import React from "react";
import Product5 from "../ProductProps/Product5";

const OrderX5 = () => {
  const header = "All Businesses can Use OrderX";
  const subheader = "Welcome to the new way of running flex spaces.";
  const body =
    "No matter what type of business you run, OrderX allows you to get your business online in minutes.";
  return (
    <div>
      {" "}
      <Product5 header={header} subheader={subheader} body={body} />
    </div>
  );
};

export default OrderX5;
