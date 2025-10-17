import React from "react";
import Product7 from "../ProductProps/Product7";

const ThriftX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader = "Want To See Our Investment Platform Software In Action?";
  const background = "#222";
  const backgroundColor = "#fff";
  const color = "#222";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#222";
  return (
    <div>
      {" "}
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

export default ThriftX7;
