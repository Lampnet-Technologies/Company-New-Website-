import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/Workspaceclasses.svg";

const NCXBBX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default NCXBBX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Auto/Spare Parts & Services",
  },
  {
    id: 2,
    img: Business1,
    head: "Agro & Farm Supplies",
  },
  {
    id: 3,
    img: Business1,
    head: "Minimarts & Supermarkets",
  },
  {
    id: 4,
    img: Business1,
    head: "Furniture & Homeware",
  },
  {
    id: 5,
    img: Business1,
    head: "Electronics & Mobiles",
  },
];
