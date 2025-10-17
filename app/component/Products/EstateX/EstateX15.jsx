import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const EstateX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Seamlessly Connected With Leading Platforms";
  const body =
    "EstateX operates on a unified database and integrates effortlessly with popular real estate, accounting, and communication tools — ensuring your workflow remains smooth, automated, and efficient across all channels.";
  const initial = "Schedule Demo";
  const body1 = "100+ Major Add-ons";
  const body2 = "Trusted Access Providers";
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

export default EstateX15;
