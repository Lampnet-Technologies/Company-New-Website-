import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceA.svg";
import Product11 from "../ProductProps/Product11";

const OrderX12 = () => {
  const header = "OrderX Ecommerce Online Webstore";
  const body =
    "OrderX Ecommerce is a powerful online webstore solution that enables businesses to establish a strong online presence and reach a wider audience. With a user-friendly interface, customizable design options, and seamless integration with payment gateways, OrderX Ecommerce provides everything you need to create a successful online store. From product management to order processing and customer support, our platform is designed to streamline your e-commerce operations and help you grow your business.";
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

export default OrderX12;
