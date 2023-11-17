import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/RestaurantGift.svg";

const Restaurant6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default Restaurant6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Restaurants",
  },
  {
    id: 2,
    img: Business1,
    head: "Cake Shop",
  },
  {
    id: 3,
    img: Business1,
    head: "Catering",
  },
  {
    id: 4,
    img: Business1,
    head: "Supermarket",
  },
  {
    id: 5,
    img: Business1,
    head: "Pizza Store",
  },
];
