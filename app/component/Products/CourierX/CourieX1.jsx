import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/Producthero.svg";

const CourieX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "CourierX";
  const subheader =
    "A Courier Delivery App For Last Mile Delivery Management & Logistics";
  const paragraph =
    "CourierX is an all-in-one customizable delivery management software to keep track of delivery operations, for all types of businesses";
  return (
    <div>
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

export default CourieX1;
