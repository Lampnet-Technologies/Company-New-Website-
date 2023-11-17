import React from "react";
import Product7 from "../ProductProps/Product7";

const FeedX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader =
    "Protect your patients with room-level locating, wander management, and access control with MedX";
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

export default FeedX7;
