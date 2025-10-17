import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const Restaurant16 = () => {
  const header = "Start Serving Smarter. Experience Restaurant 360 Today.";
  const subheader = "Join. Manage. Grow.";
  const body =
    "Restaurant 360 brings all your operations—orders, kitchen, delivery, staff, and payments—into one powerful, easy-to-use system. Streamline service, boost efficiency, and deliver exceptional customer experiences.";
  const initial = "Become a Partner";
  const backgroundColor = "#AB0E12";
  const border = "0px solid #AB0E12";
  return (
    <div>
      <Product11
        subheader={subheader}
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default Restaurant16;
