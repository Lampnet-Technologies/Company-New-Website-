import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const NCXBBX16 = () => {
  const header = "Partner with NCX-BB";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate with us and Explore our Partnership Program to earn more by selling, customizing or integrating our premium billing book solution into your offerings.";
  const initial = "Become a Partner";
  const backgroundColor = "#d50ac8";
  const border = "0px solid #d50ac8";
  return (
    <div>
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

export default NCXBBX16;
