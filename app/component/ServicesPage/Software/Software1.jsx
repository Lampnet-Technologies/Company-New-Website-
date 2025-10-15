import React from "react";
import Service1Props from "../ServicesProps/Service1Props";
import AboutImage from "../../../../public/images/AboutImage.svg";

const Software1 = () => {
  const header = "Software Product Development";
  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage} />
    </div>
  );
};

export default Software1;
