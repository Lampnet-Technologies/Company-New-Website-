import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const CourieX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "The future of logistics is connected. Our open API allows you to connect with custom-built applications or niche industry tools. Tailor your solution to your specific needs and create a best-in-class logistics ecosystem.";
  const initial = "Schedule Demo";
  const body1 = "Connect Seamlessly";
  const body2 = "Build Your Dream Ecosystem";
  const body3 = "Unmatched Flexibility";
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

export default CourieX15;
