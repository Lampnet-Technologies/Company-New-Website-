import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/CoWorkEvent.svg";

const NCXBBX11 = () => {
  const header = "NCX Point of Sales Web App";
  const body =
    "LampNets NCX Billing Book POS app is designed to streamline your sales process and enhance customer experience. With its user-friendly interface and powerful features, you can easily manage transactions, track inventory, and generate reports all in one place.";
  const initial = "Schedule Demo";
  const backgroundColor = "#d50ac8";
  const border = "0px solid #d50ac8";
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

export default NCXBBX11;
