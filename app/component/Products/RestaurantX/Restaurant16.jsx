import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.svg";

const Restaurant16 = () => {
  const header = "Start Innovating Today Experience OrderX for Yourself.";
  const subheader = "Join. Sell. Earn";
  const body =
    "School 360 uses one single database and an integrated school management system to serve your entire campus and integrates seamlessly with a number of third-party solutions";
  const initial = "Become a Partner";
  return (
    <div>
      <Product11
        subheader={subheader}
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
      />
    </div>
  );
};

export default Restaurant16;
