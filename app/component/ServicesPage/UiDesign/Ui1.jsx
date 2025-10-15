import React from "react";
import Service1Props from "../ServicesProps/Service1Props";
import AboutImage from "../../../../public/images/AboutImage.svg";

const Ui1 = () => {
  const header = "UI/UX Design";
  return (
    <div>
      <Service1Props header={header} AboutImage={AboutImage} />
    </div>
  );
};

export default Ui1;
