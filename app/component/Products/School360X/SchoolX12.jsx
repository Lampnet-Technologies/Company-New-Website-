import React from "react";
import Mockup1 from "../../../../public/images/SchoolExploreA.svg";
import Product11 from "../ProductProps/Product11";

const SchoolX12 = () => {
  const header = "CBT Exam System";
  const body =
    "LampNet Course Creation and E-learning App is an enterprise learning management system engineered to support the most demanding and complex learning ecosystems. Simplify e-Learning  with LampNet learning solution.";
  const initial = "Schedule Demo";
  const backgroundColor = "#AB0E12";
  const border = "0px solid #AB0E12";
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

export default SchoolX12;
