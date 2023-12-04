import React from "react";
import Product5 from "../ProductProps/Product5";

const HotelX5 = () => {
  const header = "All Restaurants Can Use Restaurant 360";
  const subheader = "Own A Multi-Delivery Business With Ease";
  const body =
    "No matter what type of business you run, Restaurant 360 allows you to get your business online in minutes.";
  const color = "#34A853";
  return (
    <div>
      <Product5
        header={header}
        subheader={subheader}
        body={body}
        textColor={color}
      />
    </div>
  );
};

export default HotelX5;
