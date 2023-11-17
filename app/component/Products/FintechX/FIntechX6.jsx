import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/FintechWorks.svg";

const FIntechX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default FIntechX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Banking",
  },
  {
    id: 2,
    img: Business1,
    head: "Microfinance",
  },
  {
    id: 3,
    img: Business1,
    head: "Top-up & Bill Payment",
  },
  {
    id: 4,
    img: Business1,
    head: "Crypto",
  },
  {
    id: 5,
    img: Business1,
    head: "Insurance",
  },
  {
    id: 5,
    img: Business1,
    head: "E-ticket Booking",
  },
];
