import React from "react";
import Product7 from "../ProductProps/Product7";

const EstateX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader = "Choose EstateX Today So You Can Scale Your Tomorrow.";
  const background = "#AB0E12";
  const backgroundColor = "#fff";
  const color = "#AB0E12";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#AB0E12";
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

export default EstateX7;
