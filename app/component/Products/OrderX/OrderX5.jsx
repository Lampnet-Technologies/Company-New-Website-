import React from "react";
import Product5 from "../ProductProps/Product5";

const OrderX5 = () => {
  const header = "All Businesses can Use OrderX";
  const subheader = "Flexible Solutions for Every Industry";
  const body =
    "OrderX is designed to adapt to the unique needs of various industries, including retail, manufacturing, logistics, and more.";
  const color = "#F76C6C";
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

export default OrderX5;
