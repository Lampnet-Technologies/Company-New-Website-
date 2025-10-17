import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/UberXEcommerce.svg";

const UberX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default UberX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Ride-Hailing Services",
  },
  {
    id: 2,
    img: Business1,
    head: "Delivery & Logistics",
  },
  {
    id: 3,
    img: Business1,
    head: "School Transport",
  },
  {
    id: 4,
    img: Business1,
    head: "Corporate Transportation",
  },
  {
    id: 5,
    img: Business1,
    head: "Goods & Parcel Delivery",
  },
];
