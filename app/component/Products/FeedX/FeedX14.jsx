import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.svg";

const FeedX14 = () => {
  const header = "Empower your Clients and business with CourierX";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate with us and Explore our Partnership Program to earn more by selling, customizing or integrating our premium logistic solution";
  const initial = "Become a Partner";
  const backgroundColor = "#F77E63";
  const border = "0px solid #F77E63";
  return (
    <div>
      {" "}
      <Product11
        subheader={subheader}
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

export default FeedX14;
