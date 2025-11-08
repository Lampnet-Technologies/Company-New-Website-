import React from "react";
import Mockup1 from "../../../../public/images/SchoolExploreA.svg";
import Product11 from "../ProductProps/Product11";

const SchoolX12 = () => {
  const header = "CBT Exam System";
  const body =
    "LampNet CBT Exam System is a comprehensive computer-based testing solution designed to streamline the examination process for educational institutions and certification bodies. It offers a secure, efficient, and user-friendly platform for creating, administering, and managing exams.";
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
