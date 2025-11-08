import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup2.svg";

const CourieX12 = () => {
  const header = "Build your Supply Chain or Logistics Website";
  const body =
    "Focus on efficiency? We build logistics websites that showcase your services, simplify quote requests, and track shipments in real-time. Attract new clients and empower your operations with a website built to move.";
  const initial = "Schedule Demo";
  const backgroundColor = "#54BD95";
  const border = "0px solid #54BD95";
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

export default CourieX12;
