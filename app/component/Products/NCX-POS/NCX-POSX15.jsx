import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const NCXPOSX15 = () => {
  const header = "One-Click Integrations";
  const subheader = "Turn MBPOS Into Your Own SaaS";
  const body =
    "NCX Point of Sale seamlessly integrates with a wide range of third-party applications, allowing you to customize your POS system to fit your unique business needs. From accounting software to marketing tools, our integrations help streamline your operations and enhance your customer experience.";
  const initial = "Schedule Demo";
  const body1 = "Packages (free, trial, paid/monthly/yearly)";
  const body2 = "Backup (Local/Dropbox), custom CSS/JS, PWA";
  const body3 = "Custom domain, custom branding, custom logo";
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

export default NCXPOSX15;
