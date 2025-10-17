import React from "react";
import Product5 from "../ProductProps/Product5";

const HotelX5 = () => {
  const header = "Get Your Hotel Online in Minutes";
  const subheader = "Works For Any Type of Hotel";
  const body =
    "No matter what type of hotel you run, HotelX allows you to get your hotel online in minutes.";
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
