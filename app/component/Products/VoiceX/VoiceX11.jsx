import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/OrderXMarketPlace.svg";

const VoiceX11 = () => {
  const header = "VoiceX Text-to-Speech App";
  const body =
    "LampNet Course Creation and E-learning App is an enterprise learning management system engineered to support the most demanding and complex learning ecosystems. Simplify e-Learning  with LampNet learning solution.";
  const initial = "Schedule Demo";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";

  return (
    <div>
      {" "}
      <Product11
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

export default VoiceX11;
