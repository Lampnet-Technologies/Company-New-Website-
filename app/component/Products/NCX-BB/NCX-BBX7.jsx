import React from "react";
import Product7 from "../ProductProps/Product7";

const NCXBBX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Experience the Future with NCX-BB";
  const subheader = "Your Ultimate Billing Book Solution for Seamless Business Management";

  const background = "#d50ac8";
  const backgroundColor = "#fff";
  const color = "#9b0491";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#d50ac8";

  return (
    <div>
      <Product7
        header={header}
        subheader={subheader}
        initial={initial}
        initial1={initial1}
        background={background}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
        color2={color2}
        background2={background2}
      />
    </div>
  );
};

export default NCXBBX7;
