import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/EstateXHouseB.svg";

const EstateX12 = () => {
  const header = "EstateX House Listing & Shortlet Booking Website";
  const body =
    "The EstateX website offers an intuitive, responsive interface for showcasing listings, managing shortlets, and processing secure bookings. Simplify your real estate operations and enhance client experience from any device.";
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

export default EstateX12;
