import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/UberXHero.svg";

const UberX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "UberX";
  const subheader = "Uber Clone - Best Ride-hailing App Software";
  const paragraph =
    "Power up your transport business with UberX Ride-hailing dispatch software. UberX can help effectively manage your business and makes every operation streamlined.";
  const backgroundColor = "#0F479C";
  const border = "1px solid #0F479C";
  const colorbutton = "#0F479C";
  const color = "#0F479C";
  return (
    <div>
      {" "}
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

export default UberX1;
