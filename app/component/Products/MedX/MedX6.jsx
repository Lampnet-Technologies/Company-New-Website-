import React from "react";
import Business1 from "../../../../public/images/Medxa.svg";
import Business2 from "../../../../public/images/Medxb.svg";
import Business3 from "../../../../public/images/Medxb.svg";
import Business4 from "../../../../public/images/Medxb.svg";
import Business5 from "../../../../public/images/Medxb.svg";
import Product6 from "../ProductProps/Product6";

const MedX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default MedX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Cosmetic Surgeries",
  },
  {
    id: 2,
    img: Business2,
    head: "Hair Transplant",
  },
  {
    id: 3,
    img: Business3,
    head: "Physiotherapy",
  },
  {
    id: 4,
    img: Business4,
    head: "Travel Clinics",
  },
  {
    id: 5,
    img: Business5,
    head: "Spa & Salon",
  },
];
