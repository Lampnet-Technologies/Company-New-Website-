import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceD.svg";
import Product11 from "../ProductProps/Product11";

const VoiceX15 = () => {
  const header = "VoiceX AI Business Recorder Web App";
  const body =
    "Experience the Power of AI-Driven Voice Technology. Transform text into natural, human-like speech with VoiceX. Perfect for content creators, businesses, and developers looking to enhance accessibility and engagement. Elevate your meetings with VoiceX Meeting Recorder. Capture every detail with AI-powered transcription and voice recognition. Perfect for professionals seeking accurate records and enhanced productivity. Try it now and transform the way you document meetings!";
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

export default VoiceX15;
