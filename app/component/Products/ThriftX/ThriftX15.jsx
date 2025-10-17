import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const ThriftX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "ThriftX 360 is designed to seamlessly integrate with a wide range of third-party applications and services, allowing businesses to connect their existing tools and workflows effortlessly. Whether it's CRM systems, marketing platforms, or analytics tools, ThriftX 360 provides one-click integrations to enhance productivity and streamline operations.";
  const initial = "Schedule Demo";
  const body1 = "Cloud-Based Solution";
  const body2 = "24/7 Customer Support";
  const body3 = "Free Open API";
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

export default ThriftX15;
