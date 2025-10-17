import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const NCXBBX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "NCX Billing Book can be easily integrated with your favorite tools";
  const body =
    "Seamlessly connect NCX-BB with your existing software and tools to streamline your workflow and enhance productivity.";
  const initial = "Schedule Demo";
  const body1 = "Complete POS & Inventory System";
  const body2 = "Multi-Currency Billing";
  const body3 = "Customer & Supplier CRM";
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

export default NCXBBX15;
