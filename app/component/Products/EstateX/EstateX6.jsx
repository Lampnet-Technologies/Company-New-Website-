import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/EstateAssest.svg";
import Business2 from "../../../../public/images/EstateAssest.svg";
import Business3 from "../../../../public/images/EstateAssest.svg";
import Business4 from "../../../../public/images/EstateAssest.svg";
import Business5 from "../../../../public/images/EstateAssest.svg";

const EstateX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default EstateX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Logistics Companies",
  },
  {
    id: 2,
    img: Business2,
    head: "Freight Forwarding Firms",
  },
  {
    id: 3,
    img: Business3,
    head: "Manufacturing Industries",
  },
  {
    id: 4,
    img: Business4,
    head: "Quick Service Restaurants (QSR)",
  },
  {
    id: 5,
    img: Business5,
    head: "Courier & Parcel Services",
  },
];
