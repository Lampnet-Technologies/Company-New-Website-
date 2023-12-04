import React from "react";
import Product7 from "../ProductProps/Product7";

const MedX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader = "Sign up for a CRM specially built for healthcare";
  const background = "#3E83EA";
  const backgroundColor = "#fff";
  const color = "#3E83EA";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#3E83EA";
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

export default MedX7;
