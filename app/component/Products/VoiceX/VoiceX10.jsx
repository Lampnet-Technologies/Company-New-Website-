import React from "react";
import Product10 from "../ProductProps/Product10";

const VoiceX10 = () => {
  const header = "Explore More Flexibilities";
  const subheader = "Building Your Business Is Our Passion";
  const body =
    "LampNets VoiceX AI Solution works for all use cases and strives to provide top-tier IT solutions to businesses of all sizes and industries.";
  const color = "#F76C6C";
  return (
    <div>
      <Product10
        header={header}
        subheader={subheader}
        body={body}
        color={color}
      />
    </div>
  );
};

export default VoiceX10;
