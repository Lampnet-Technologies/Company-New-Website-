import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const OrderX16 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "Seamlessly connect with your favorite tools and platforms to enhance your e-commerce experience. Our one-click integrations make it easy to streamline your operations and boost productivity.";
  const initial = "Schedule Demo";
  const body1 = "Multi-Channel Selling";
  const body2 = "Major Access Provider";
  const body3 = "24/7 Customer Support";
  return (
    <div>
      <Product15
        header={header}
        subheader={subheader}
        body={body}
        body1={body1}
        body2={body2}
        body3={body3}
        initial={initial}
        img={Tick}
        image={Group2}
      />
    </div>
  );
};

export default OrderX16;
