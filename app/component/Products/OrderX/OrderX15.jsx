import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceD.svg";
import Product11 from "../ProductProps/Product11";

const OrderX15 = () => {
  const header = "OrderX Laundry Delivery App";
  const body =
    "OrderX Laundry Delivery App is a convenient and efficient solution for customers to order and receive laundry services directly to their doorstep. With a user-friendly interface, secure payment options, and real-time tracking, our app ensures a seamless experience from order placement to delivery. Whether you're a residential customer or a business, OrderX Laundry Delivery App is designed to meet your laundry needs with ease and reliability.";
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

export default OrderX15;
