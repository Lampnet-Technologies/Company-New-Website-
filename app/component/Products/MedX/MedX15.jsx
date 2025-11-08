import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const MedX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "MedX offers a unified hospital management platform built on a single, secure database. It streamlines operations across departments and integrates effortlessly with third-party healthcare systems and tools.";
  const initial = "Schedule a Demo";
  const body1 = "100+ Advanced Modules";
  const body2 = "Trusted by Leading Healthcare Providers";
  const body3 = "Open & Secure API Integration";
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

export default MedX15;
