import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/OrderXHero.svg";

const VoiceX1 = () => {
  const initial = "Consult Our Expert";
  const initial2 = "Become a Reseller";
  const header = "VoiceX";
  const subheader = "A Text-to-Speech Artifical Intelligence Platform";
  const paragraph =
    "VoiceX is an advanced text-to-speech platform that leverages cutting-edge AI technology to convert written text into natural, human-like speech. With a wide range of customizable voices and languages, VoiceX is perfect for businesses looking to enhance their customer interactions, create engaging content, or improve accessibility.";
  const backgroundColor = "#885050";
  const border = "1px solid #885050";
  const colorbutton = "#885050";
  const color = "#885050";
  return (
    <div>
      <Product1
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        image={Producthero}
        initial={initial}
        initial2={initial2}
        color={color}
        backgroundColor={backgroundColor}
        colorbutton={colorbutton}
        border={border}
        textColor={color}
      />
    </div>
  );
};

export default VoiceX1;
