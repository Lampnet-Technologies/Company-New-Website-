import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/Preschool.svg";
import Business2 from "../../../../public/images/Preschool.svg";
import Business3 from "../../../../public/images/Preschool.svg";
import Business4 from "../../../../public/images/Preschool.svg";
import Business5 from "../../../../public/images/Preschool.svg";

const SchoolX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default SchoolX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "K-12 Schools",
  },
  {
    id: 2,
    img: Business2,
    head: "Vocation School",
  },
  {
    id: 3,
    img: Business3,
    head: "Faith-based Schools",
  },
  {
    id: 4,
    img: Business4,
    head: "Summer School",
  },
  {
    id: 5,
    img: Business5,
    head: "Pre Schools",
  },
  {
    id: 6,
    img: Business5,
    head: "Universities",
  },
];
