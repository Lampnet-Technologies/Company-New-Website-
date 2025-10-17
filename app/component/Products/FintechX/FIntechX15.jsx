import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const FIntechX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "PayX seamlessly integrates with a wide range of third-party applications and services, allowing you to connect your existing tools and workflows effortlessly. Whether it's CRM systems, accounting software, e-commerce platforms, or marketing tools, our one-click integrations ensure that your fintech operations are streamlined and efficient.";
  const initial = "Schedule Demo";
  const body1 = "24/7 Support";
  const body2 = "Customizable Solutions";
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

export default FIntechX15;
