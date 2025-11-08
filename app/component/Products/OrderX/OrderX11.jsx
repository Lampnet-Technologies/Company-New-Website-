import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/OrderXMarketPlace.svg";

const OrderX11 = () => {
  const header = "OrderX Marketplace-ecommerce App";
  const body =
    "OrderX Marketplace is a comprehensive e-commerce solution that empowers businesses to create and manage their online stores with ease. With a user-friendly interface, robust features, and seamless integration options, OrderX enables entrepreneurs to showcase their products, process payments securely, and provide an exceptional shopping experience for their customers.";
  const initial = "Schedule Demo";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";

  return (
    <div>
      {" "}
      <Product11
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default OrderX11;
