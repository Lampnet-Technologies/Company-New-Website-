import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceB.svg";
import Product11 from "../ProductProps/Product11";

const VoiceX13 = () => {
  const header = "VoiceX Audiobook Web App";
  const body =
    "Experience the Power of AI-Driven Voice Technology. Transform text into natural, human-like speech with VoiceX. Perfect for content creators, businesses, and developers looking to enhance accessibility and engagement. Dive into a world of immersive storytelling with VoiceX Audiobook App. Enjoy seamless narration, customizable voices, and an extensive library at your fingertips. Perfect for book lovers and creators alike. Try it now and elevate your listening experience!";
  const initial = "Schedule Demo";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";
  return (
    <div>
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

export default VoiceX13;
