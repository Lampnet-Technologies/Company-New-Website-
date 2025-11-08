import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const MedX16 = () => {
  const header = "Start Innovating Today Experience MedX for Yourself.";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate with us and Explore our Partnership Program to earn more by selling, customizing or integrating our MedX premium management solutions";
  const initial = "Become a Partner";
  const backgroundColor = "#3E83EA";
  const border = "0px solid #3E83EA";
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

export default MedX16;
