import React from "react";
import Product5 from "../ProductProps/Product5";

const FeedX5 = () => {
  const header = "All businesses can use FoodX";
  const subheader = "Explore Infinite Possibilities With FoodX";
  const body =
    "All businesses dealing with pickup, delivery, workforce management and are focused on satisfying their customers";
  const color = "#F6613F";
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

export default FeedX5;
