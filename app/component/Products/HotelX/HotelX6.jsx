import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/HotelRequest.svg";

const HotelX6 = () => {
  return (
    <div>
      {" "}
      <Product6 data={data} />
    </div>
  );
};

export default HotelX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Hotels",
  },
  {
    id: 2,
    img: Business1,
    head: "Resorts",
  },
  {
    id: 3,
    img: Business1,
    head: "Boutique Lodges",
  },
  {
    id: 4,
    img: Business1,
    head: "Serviced Apartments",
  },
  {
    id: 5,
    img: Business1,
    head: "Vacation Rentals",
  },
];
