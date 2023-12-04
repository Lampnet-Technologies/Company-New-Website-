import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/EstateX1hero.svg";

const EstateX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "EstateX";
  const subheader =
    "Ready-to-Use Property Listing & Management App Built for You";
  const paragraph =
    "Choose the property management software that powers you to do more than just manage properties.";
  const backgroundColor = "#222";
  const border = "1px solid #222";
  const colorbutton = "#222";
  const color = "#AB0E12";
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

export default EstateX1;
