import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/EstateXHouseA.svg";

const EstateX11 = () => {
  const header = "EstateX House Listing & Shortlet Booking App";
  const body =
    "EstateX mobile app provides a seamless platform for property owners, agents, and clients to list, discover, and book shortlet apartments or houses with ease. Manage bookings, payments, and communications—all in one convenient app.";
  const initial = "Schedule Demo";
  const backgroundColor = "#AB0E12";
  const border = "0px solid #AB0E12";

  return (
    <div>
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

export default EstateX11;
