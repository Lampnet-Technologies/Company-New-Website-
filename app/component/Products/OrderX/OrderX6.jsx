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
    head: "Classes",
  },
  {
    id: 2,
    img: Business1,
    head: "Vacation & Camping",
  },
  {
    id: 3,
    img: Business1,
    head: "Room",
  },
  {
    id: 4,
    img: Business1,
    head: "Desks",
  },
  {
    id: 5,
    img: Business1,
    head: "Hybrid Office",
  },
];
