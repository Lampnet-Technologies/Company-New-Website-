import React from "react";
import Features1 from "../../../../public/images/SchoolA.svg";
import Features2 from "../../../../public/images/SchoolB.svg";
import Features3 from "../../../../public/images/SchoolC.svg";
import Product2 from "../ProductProps/Product2";

const SchoolX2 = () => {
  const header = "World-Class Features";
  const subHeader = "Automate and Simplify School Operations with School 360";
  const paragraph =
    "School 360 is a comprehensive school management system designed to help educational institutions of all sizes operate efficiently. Manage academics, administration, communication, and performance — all from one intuitive platform.";
  const color = "#AB0E12";

  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default SchoolX2;

const data = [
  {
    id: 1,
    body: "Intuitive and easy-to-navigate dashboards for teachers, students, and administrators — making school management effortless.",
    name: "User Friendly",
    image: Features1,
  },
  {
    id: 2,
    body: "Reduce administrative overhead with cost-effective automation for attendance, results, communication, and reporting.",
    name: "Cost Effective",
    image: Features2,
  },
  {
    id: 3,
    body: "Comprehensive training and onboarding support ensure your staff and teachers can use the system effectively from day one.",
    name: "On-site Training",
    image: Features3,
  },
  {
    id: 4,
    body: "We continuously upgrade School 360 with the latest educational technology to keep your institution ahead of the curve.",
    name: "Continuous Innovation",
    image: Features1,
  },
];
