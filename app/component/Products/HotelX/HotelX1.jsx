import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/HotelXHero.svg";

const HotelX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "HotelX";
  const subheader = "Hospitality & Hotel Management Software";
  const paragraph =
    "Software designed for hospitality and hotel management, to help you manage staff, deliver customer satisfaction, drive revenue and reduce operational costs.";
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
      />
    </div>
  );
};

export default HotelX1;
