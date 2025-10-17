import React from "react";
import Product15 from "../ProductProps/Product15";
import Group2 from "../../../../public/images/Group2.svg";
import Tick from "../../../../public/images/Tick.svg";

const VoiceX16 = () => {
  const header = "One-Click Integrations";
  const subheader = "Integrated with Major Platforms";
  const body =
    "VoiceX seamlessly integrates with over 100 major platforms, providing you with the flexibility and tools needed to enhance your business operations. Our free open API allows for easy customization and connectivity, ensuring that you can tailor the solution to fit your unique needs.";
  const initial = "Schedule Demo";
  const body1 = "Free Major Platform Integration";
  const body2 = "Unlimited Integrations";
  const body3 = "Open API for Customization";
  return (
    <div>
      <Product15
        header={header}
        subheader={subheader}
        body={body}
        body1={body1}
        body2={body2}
        body3={body3}
        initial={initial}
        img={Tick}
        image={Group2}
      />
    </div>
  );
};

export default VoiceX16;
