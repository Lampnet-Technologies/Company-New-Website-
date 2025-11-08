import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const Restaurant15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Connect Your Favorite Restaurant Tools Seamlessly";
  const body =
    "Restaurant 360 integrates effortlessly with major POS systems, delivery platforms, accounting tools, and loyalty programs — giving you a unified, efficient workflow across all your restaurant operations.";
  const initial = "Schedule Demo";
  const body1 = "100+ Supported Add-ons";
  const body2 = "POS & Delivery Integrations";
  const body3 = "Free Open API";

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

export default Restaurant15;
