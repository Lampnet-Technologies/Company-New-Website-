import React from "react";
import Product7 from "../ProductProps/Product7";

const Restaurant7 = () => {
  const initial1 = "Download Now";
  const initial = "Become a Reseller";
  const header = "Let’s Collaborate";
  const subheader =
    "Start A Multi Restaurant Food Ordering Business Like Ubereats, Zomato & Talabat";
  const background = "#0F479C";
  const backgroundColor = "#fff";
  const color = "#453787";
  const border = " 1px solid #fff";
  const color2 = "#fff";
  const background2 = "#0F479C";
  return (
    <div>
      {" "}
      <Product7
        header={header}
        subheader={subheader}
        initial={initial}
        initial1={initial1}
        background={background}
        backgroundColor={backgroundColor}
        color={color}
        border={border}
        color2={color2}
        background2={background2}
      />
    </div>
  );
};

export default Restaurant7;
