import React from "react";
import Product7 from "../ProductProps/Product7";

const NCXPOSX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader = "Join our growing network of NCX Partners";

  const background = "#F76C6C";
  const backgroundColor = "#fff";
  const color = "#f1bdbd";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#F76C6C";

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

export default NCXPOSX7;
