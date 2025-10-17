import React from "react";
import Product10 from "../ProductProps/Product10";

const FIntechX10 = () => {
  const header = "Explore More Flexibility";
  const subheader = "Empowering Your Financial Growth is Our Passion";
  const body =
    "PayX is built to adapt to your business model — from digital banking and payment processing to lending, wallets, and compliance. We deliver secure, scalable, and customizable fintech solutions designed to help your brand thrive in any market.";
  const color = "#453787";
  return (
    <div>
      <Product10
        header={header}
        subheader={subheader}
        body={body}
        color={color}
      />
    </div>
  );
};

export default FIntechX10;
