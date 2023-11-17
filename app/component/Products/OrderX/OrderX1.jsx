import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/OrderXHero.svg";

const OrderX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "OrderX";
  const subheader = "An online shopping App for your E-commerce";
  const paragraph =
    "Co-workspaceX is reimagining coworking software. Say hello to the all-in-one platform for flex space management.";
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

export default OrderX1;
