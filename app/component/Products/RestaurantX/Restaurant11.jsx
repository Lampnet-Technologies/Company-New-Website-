import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/RestaurantHero.svg";

const Restaurant11 = () => {
  const header = "Restaurant Management Solution";
  const body =
    "Restaurant 360 is a complete restaurant management platform designed to simplify daily operations, from order processing and reservations to staff coordination and inventory control — all in one powerful system.";
  const initial = "Schedule Demo";
  const backgroundColor = "#AB0E12";
  const border = "0px solid #AB0E12";
  return (
    <div>
      {" "}
      <Product11
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default Restaurant11;
