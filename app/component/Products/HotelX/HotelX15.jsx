import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const HotelX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Powerful, Secure, and Scalable Hotel Management Software";
  const body =
    "HotelX uses one single database and an integrated hotel management system to serve your entire property and integrates seamlessly with a number of third-party solutions";
  const initial = "Schedule Demo";
  const body1 = "Multi-Property Management";
  const body2 = "Multi-Platform Support";
  const body3 = "Customizable Features";
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

export default HotelX15;
