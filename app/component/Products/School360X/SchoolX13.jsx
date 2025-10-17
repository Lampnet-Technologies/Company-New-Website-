import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/SchoolExploreB.svg";

const SchoolX13 = () => {
  const header = "School Management System";
  const body =
    "LampNet School Management System is a comprehensive solution designed to streamline and automate various administrative and academic processes within educational institutions. It offers a centralized platform for managing student information, attendance, grades, schedules, communication, and more.";
  const initial = "Schedule Demo";
  const backgroundColor = "#AB0E12";
  const border = "0px solid #AB0E12";
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

export default SchoolX13;
