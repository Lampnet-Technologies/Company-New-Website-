import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/DigitalThriftB.svg";

const ThriftX12 = () => {
  const header = "Investment Management App";
  const body =
    "ThriftX Investment Management App is a comprehensive solution designed to help financial institutions manage their investment portfolios effectively. It offers advanced analytics, real-time data tracking, and customizable reporting features. With ThriftX, users can make informed investment decisions, monitor market trends, and optimize their asset allocation strategies to maximize returns.";
  const initial = "Schedule Demo";
  const backgroundColor = "#E47E1F";
  const border = "0px solid #E47E1F";
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

export default ThriftX12;
