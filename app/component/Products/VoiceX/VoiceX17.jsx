import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup5.png";

const VoiceX17 = () => {
  const header = "VoiceX Partnership Program";
  const subheader = "Join. Sell. Earn";
  const body =
    "Collaborate with us and Explore our Partnership Program to earn more by selling, customizing or integrating our premium VoiceX solutions with your services.";
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

export default VoiceX17;
