import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const CoWorkspaceX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with thousands of apps";
  const body =
    "Co-WorkspaceX uses a unified platform and an integrated workspace management system to manage all your coworking operations — from bookings and memberships to billing and access control — while integrating seamlessly with third-party tools.";
  const initial = "Schedule Demo";
  const body1 = "100+ Powerful Add-ons";
  const body2 = "Seamless Access Control";
  const body3 = "Open API Integration";

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

export default CoWorkspaceX15;
