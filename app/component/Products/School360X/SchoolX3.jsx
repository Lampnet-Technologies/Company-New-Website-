import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Features3.svg";

const SchoolX3 = () => {
  const header = "One Platform, All Features";
  const subheader =
    "Schools like yours love School 360 — designed for every stakeholder in education";
  const paragraph =
    "School 360 brings together teachers, students, parents, and administrators in one intelligent platform. It simplifies daily operations, enhances communication, and improves learning outcomes for the entire school community.";
  const color = "#AB0E12";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default SchoolX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Students",
    body: "Access assignments, track grades, and stay informed with real-time updates — all from one easy-to-use student portal.",
  },
  {
    id: 2,
    image: Features3,
    title: "Parents",
    body: "Stay connected with your child’s progress, attendance, and school activities through transparent reports and instant notifications.",
  },
  {
    id: 3,
    image: Features3,
    title: "School Administrators",
    body: "Manage academic schedules, staff, finances, and reports efficiently with an integrated dashboard that gives you full control and visibility.",
  },
];
