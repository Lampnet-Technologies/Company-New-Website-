import React from "react";
import Product7 from "../ProductProps/Product7";

const SchoolX7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader = "Ready to see what School 360 can do for you?";
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

export default SchoolX7;
