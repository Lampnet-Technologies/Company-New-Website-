import React from "react";
import Product6 from "../ProductProps/Product6";
import Business1 from "../../../../public/images/OrderXClasses.svg";

const VoiceX6 = () => {
  return (
    <div>
      <Product6 data={data} />
    </div>
  );
};

export default VoiceX6;

const data = [
  {
    id: 1,
    img: Business1,
    head: "Education & E-Learning",
  },
  {
    id: 2,
    img: Business1,
    head: "Media & Entertainment",
  },
  {
    id: 3,
    img: Business1,
    head: "Marketing",
  },
  {
    id: 4,
    img: Business1,
    head: "Broadcasting",
  },
  {
    id: 5,
    img: Business1,
    head: "Business Communications",
  },
];
