import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MedxHospital.svg";
const MedX13 = () => {
  const header = "CourierX Courier & Logistics Hailing App";
  const body =
    "LampNet Course Creation and E-learning App is an enterprise learning management system engineered to support the most demanding and complex learning ecosystems. Simplify e-Learning  with LampNet learning solution.";
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
