import React from "react";
import Product1 from "../ProductProps/Product1";
import Producthero from "../../../../public/images/Medx1Hero.svg";

const MedX1 = () => {
  const header = "MedX";
  const subheader = "All-In-One Telehealth + Patient Engagement Software";
  const paragraph =
    "MedX is a complete solution to manage your offline and online medical practice";
  const initial = "Request a Quote";
  const initial2 = "Become a Reseller";

  const backgroundColor = "#3E83EA";
  const border = "1px solid #3E83EA";
  const colorbutton = "#3E83EA";
  const color = "#3E83EA";

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

export default MedX1;
