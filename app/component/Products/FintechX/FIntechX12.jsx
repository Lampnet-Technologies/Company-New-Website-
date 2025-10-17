import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MobilBankingA.svg";

const FIntechX12 = () => {
  const header = "Banking Management System";
  const body =
    "Our Banking Management System is a powerful platform designed to streamline and optimize all aspects of financial operations. From account management and transactions to reporting and compliance, it delivers efficiency, security, and control for banks and financial institutions of any size.";
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

export default FIntechX12;
