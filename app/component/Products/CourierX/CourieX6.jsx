import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/Business1.svg";
import Business2 from "../../../../public/images/Business2.svg";
import Business3 from "../../../../public/images/Business3.svg";
import Business4 from "../../../../public/images/Business4.svg";
import Business5 from "../../../../public/images/Business5.svg";

const CourieX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default CourieX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Logistics",
  },
  {
    id: 2,
    img: Business2,
    head: "Freight Forwarder",
  },
  {
    id: 3,
    img: Business3,
    head: "Manufacturing",
  },
  {
    id: 4,
    img: Business4,
    head: "Quick Service Restaurants",
  },
  {
    id: 5,
    img: Business5,
    head: "Courier & Parcel",
  },
];
