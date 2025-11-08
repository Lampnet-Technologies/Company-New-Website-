import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/CoWorkEvent.svg";

const NCXPOSX12 = () => {
  const header = "ERP System Online Web & Mobile App";
  const body =
    "NCX Point of Sale App is an enterprise learning management system engineered to support the most demanding and complex learning ecosystems. Simplify e-Learning  with NCX learning solution. Deliver engaging learning experiences, track progress, and manage training programs with ease.";
  const initial = "Schedule Demo";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";
  return (
    <div>
      {" "}
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

export default NCXPOSX12;
