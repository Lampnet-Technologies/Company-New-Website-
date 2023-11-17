import React from "react";
import AboutImage from "../../../../public/images/AboutImage.svg";
import Service1Props from "../ServicesProps/Service1Props";

const Service1 = () => {
  const header = "Startup, Scale-up & MVP Development";

  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage} />
    </div>
  );
};

export default Service1;
