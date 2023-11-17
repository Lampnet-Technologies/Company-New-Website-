import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/ThriftXTypes.svg";

const ThriftX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default ThriftX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Venture Capitalist",
  },
  {
    id: 2,
    img: Business1,
    head: "Portfolio Managers",
  },
  {
    id: 3,
    img: Business1,
    head: "Institutions",
  },
  {
    id: 4,
    img: Business1,
    head: "Society Elites",
  },
  {
    id: 5,
    img: Business1,
    head: "Family Offices",
  },
  {
    id: 6,
    img: Business1,
    head: "Wealth",
  },
];
