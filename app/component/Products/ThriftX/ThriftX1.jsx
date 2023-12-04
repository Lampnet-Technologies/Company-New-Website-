import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/ThriftHero.svg";

const ThriftX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "ThriftX";
  const subheader =
    "Thrift Collection & Investment Management Software for Your Thrift Banking";
  const paragraph =
    "Automate your investment business operations to increase efficiency, gather and analyse important data to source and close more deals online.";
  const backgroundColor = "#E47E1F";
  const border = "1px solid #E47E1F";
  const colorbutton = "#E47E1F";
  const color = "#E47E1F";
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

export default ThriftX1;
