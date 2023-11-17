import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/RestaurantHero.svg";

const Restaurant1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "Restaurant 360";
  const subheader = "360 Restaurant Management Solution.";
  const paragraph =
    "Setup your own multi-vendor marketplace to serve your customers with multiple products and services. Get Started with our SaaS-based on-demand multi-delivery solution.";
  return (
    <div>
      {" "}
      <Product1
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
      />
    </div>
  );
};

export default Restaurant1;
