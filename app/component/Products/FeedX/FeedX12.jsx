import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MockupX.svg";

const FeedX12 = () => {
  const header = "Become A Marketplace Mogul - Instantly";
  const body =
    "Empower restaurants & stores to sell on your branded app with our multivendor marketplace solution. Customers can browse a vast selection, order seamlessly, and track deliveries in real-time. Launch your marketplace, expand your reach, and drive revenue - all with our ready-to-use app.";
  const initial = "Schedule Demo";
  const backgroundColor = "#F77E63";
  const border = "0px solid #F77E63";
  return (
    <div>
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

export default FeedX12;
