import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/CoWorkSpaceHero.svg";
import Form from "../../Form/page";

const NCXBBX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "NCX POS & Inventry";
  const subheader = "Keep ";
  const paragraph =
    "Lightning-fast checkout, real-time stock, accounting & multi-warehouse. Now with Multi-Currency Billing and Promotional SMS to engage customers instantly. Works online on any device. Offline works on the installed device (no syncing).";
  const backgroundColor = "#d50ac8";
  const border = "1px solid #d50ac8";
  const colorbutton = "#d50ac8";
  const color = "#d50ac8";
  return (
    <div>
      <Product1
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
        color={color}
        backgroundColor={backgroundColor}
        colorbutton={colorbutton}
        border={border}
        textColor={color}
      />
    </div>
  );
};

export default NCXBBX1;
