import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const EstateX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "School 360 uses one single database and an integrated school management system to serve your entire campus and integrates seamlessly with a number of third-party solutions";
  const initial = "Schedule Demo";
  const body1 = "100+ Major Addons";
  const body2 = "Major Access Provider";
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
