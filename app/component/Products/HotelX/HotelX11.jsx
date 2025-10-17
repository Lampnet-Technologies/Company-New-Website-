import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/HotelBuilding.svg";

const HotelX11 = () => {
  const header = "HotelX Hotel Reservation & Menu Ordering App";
  const body =
    "HotelX is a comprehensive hospitality management system designed to help hotels and other accommodation providers operate efficiently. Manage bookings, guest information, billing, and reporting — all from one intuitive platform. With our user-friendly interface and powerful features, you can streamline your operations, enhance guest experiences, and boost your revenue. Whether you're a small boutique hotel or a large chain, HotelX has everything you need to succeed in the competitive hospitality industry.";
  const initial = "Schedule Demo";
  const backgroundColor = "#34A853";
  const border = "0px solid #34A853";
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

export default HotelX11;
