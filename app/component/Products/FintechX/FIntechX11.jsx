import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MobilBanking.svg";

const FIntechX11 = () => {
  const header = "Mobile Banking App";
  const body =
    "PayX is a comprehensive fintech solution that brings all your financial needs into one powerful app. From secure mobile banking and instant payments to expense tracking and investment management, PayX simplifies every aspect of your financial life. Designed for convenience, speed, and safety, it empowers individuals and businesses to manage money smarter, faster, and more efficiently.";
  const initial = "Schedule Demo";
  const backgroundColor = "#453787";
  const border = "0px solid #453787";
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

export default FIntechX11;
