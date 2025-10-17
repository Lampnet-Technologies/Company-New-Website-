import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceC.svg";
import Product11 from "../ProductProps/Product11";

const OrderX14 = () => {
  const header = "OrderX Grocery Ordering & Delivery App";
  const body =
    "OrderX Grocery Ordering & Delivery App is a convenient and efficient solution for customers to order and receive grocery deliveries directly to their doorstep. With a user-friendly interface, secure payment options, and real-time tracking, our app ensures a seamless experience from order placement to delivery. Whether you're a residential customer or a business, OrderX Grocery Ordering & Delivery App is designed to meet your grocery needs with ease and reliability.";
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

export default OrderX14;
