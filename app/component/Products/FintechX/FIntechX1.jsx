import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/FintechHero.svg";
const FIntechX1 = () => {
  const initial = "Request a Quote";
  const initial2 = "Become a Reseller";
  const header = "Fintech 360";
  const subheader =
    "A White-label Mobile Banking App For all type of Fintech Solution ";
  const paragraph =
    "Best White-label digital banking platform branded and customized for your business.";
  const backgroundColor = "#453787";
  const border = "1px solid #453787";
  const colorbutton = "#453787";
  const color = "#453787";

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

export default FIntechX1;
