import React from "react";
import Product7 from "../ProductProps/Product7";

const CourieX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader =
    "Smooth delivery experience Guaranteed with our Ready-to-Launch Delivery Management Software";
  const background = "#54BD95";
  const backgroundColor = "#fff";
  const color = "#54BD95";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#54BD95";
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

export default CourieX7;
