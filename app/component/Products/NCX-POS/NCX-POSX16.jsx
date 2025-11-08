import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const NCXPOSX16 = () => {
  const header = "Start Innovating Today. Experience NCX Point of Sale for Yourself.";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate with us to create seamless payment solutions that drive growth and enhance customer experiences. Together, we can revolutionize the way businesses operate.";
  const initial = "Become a Partner";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";
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

export default NCXPOSX16;
