import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/Grocery.svg";
import Business2 from "../../../../public/images/Food.svg";
import Business3 from "../../../../public/images/Grocery.svg";
import Business4 from "../../../../public/images/Grocery.svg";
import Business5 from "../../../../public/images/Grocery.svg";

const FeedX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default FeedX6;
const data = [
  {
    id: 1,
    img: Business1,
    head: "Grocery",
  },
  {
    id: 2,
    img: Business2,
    head: "Food",
  },
  {
    id: 3,
    img: Business3,
    head: "Pharmacy",
  },
  {
    id: 4,
    img: Business4,
    head: "Agriculture",
  },
  {
    id: 5,
    img: Business5,
    head: "Retail",
  },
];
