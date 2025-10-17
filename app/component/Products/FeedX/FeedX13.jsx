import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const FeedX13 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "Don't get bogged down by data silos. Our food ordering app and marketplace solution integrates effortlessly with thousands of apps you already use:";
  const initial = "Schedule Demo";
  const body1 = "Delivery Management";
  const body2 = "Payment Processing";
  const body3 = "Marketing and Loyalty";
  return (
    <div>
      <Product15
        header={header}
        body={body}
        initial={initial}
        image={Group2}
        subheader={subheader}
        body1={body1}
        body2={body2}
        body3={body3}
        img={Tick}
      />
    </div>
  );
};

export default FeedX13;
