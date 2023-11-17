import React from "react";
import Service1Props from "../ServicesProps/Service1Props";
import AboutImage from "../../../../public/images/AboutImage.svg";

const Api1 = () => {
  const header = "API Development & Integration";
  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage} />
    </div>
  );
};

export default Api1;
