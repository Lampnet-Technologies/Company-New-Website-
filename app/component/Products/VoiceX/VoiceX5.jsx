import React from "react";
import Product5 from "../ProductProps/Product5";

const VoiceX5 = () => {
  const header = "All Businesses can Use VoiceX";
  const subheader = "Perfect for Any Industry";
  const body =
    "No matter what type of business you run, VoiceX allows you to get your business online in minutes.";
  const color = "#F76C6C";
  return (
    <div>
      {" "}
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default VoiceX5;
