import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/OrderXMarketPlace.svg";

const VoiceX11 = () => {
  const header = "VoiceX AI Text-to-Speech App";
  const body =
    "Experience the Power of AI-Driven Voice Technology. Transform text into natural, human-like speech with VoiceX. Perfect for content creators, businesses, and developers looking to enhance accessibility and engagement. Try it now and hear the difference!";
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
