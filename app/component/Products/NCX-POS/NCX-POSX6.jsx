import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/Workspaceclasses.svg";

const NCXPOSX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default NCXPOSX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Grocery Stores",
  },
  {
    id: 2,
    img: Business1,
    head: "Laundries",
  },
  {
    id: 3,
    img: Business1,
    head: "Retail & Wholesale",
  },
  {
    id: 4,
    img: Business1,
    head: "Bookshops",
  },
  {
    id: 5,
    img: Business1,
    head: "Service-Based",
  },
   {
    id: 6,
    img: Business1,
    head: "Department Stores",
  },
];
