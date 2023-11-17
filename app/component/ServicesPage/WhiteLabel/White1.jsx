import React from "react";
import Service1Props from "../ServicesProps/Service1Props";
import AboutImage from "../../../../public/images/AboutImage.svg";

const White1 = () => {
  const header = "White Label App Customization";
  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage} />
    </div>
  );
};

export default White1;
