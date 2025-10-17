import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/OrderXClasses.svg";

const OrderX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default OrderX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Logistics Companies",
  },
  {
    id: 2,
    img: Business1,
    head: "E-commerce Stores",
  },
  {
    id: 3,
    img: Business1,
    head: "Food Delivery Services",
  },
  {
    id: 4,
    img: Business1,
    head: "Grocery & Retail Outlets",
  },
  {
    id: 5,
    img: Business1,
    head: "Courier & Dispatch Agencies",
  },
];
