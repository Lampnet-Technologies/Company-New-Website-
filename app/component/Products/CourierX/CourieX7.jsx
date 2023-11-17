import React from "react";
import Product7 from "../ProductProps/Product7";

const CourieX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader =
    "Smooth delivery experience Guaranteed with our Ready-to-Launch Delivery Management Software";

  return (
    <div>
      <Product7
        header={header}
        subheader={subheader}
        initial={initial}
        initial1={initial1}
      />
    </div>
  );
};

export default CourieX7;
