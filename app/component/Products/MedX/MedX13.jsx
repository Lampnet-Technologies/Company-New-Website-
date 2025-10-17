import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MedxHospital.svg";
const MedX13 = () => {
  const header = "MedX Hospital Management Solution";
  const body =
    "MedX is an all-in-one hospital management platform designed to streamline clinical, administrative, and operational workflows. From patient registration and appointment scheduling to billing, reporting, and analytics — MedX empowers healthcare providers to deliver efficient, high-quality care while maintaining complete control over their operations.";
  const initial = "Schedule Demo";
  const backgroundColor = "#3E83EA";
  const border = "0px solid #3E83EA";
  return (
    <div>
      <Product11
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default MedX13;
