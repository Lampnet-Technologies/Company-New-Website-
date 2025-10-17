import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const UberX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "RiderX offers seamless one-click integrations with a wide range of third-party applications and services. This allows you to enhance the functionality of your ride-hailing business by easily connecting with tools for payment processing, customer relationship management, marketing, and more.";
  const initial = "Schedule Demo";
  const body1 = "Customizable Features";
  const body2 = "Scalable Infrastructure";
  const body3 = "Robust Security";
  return (
    <div>
      {" "}
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

export default UberX15;
