import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/UberXTaxi.svg";

const UberX11 = () => {
  const header = "RiderX Ride-sharing & Taxi Hailing App";
  const body =
    "RiderX app is a comprehensive ride-sharing solution that enables entrepreneurs to launch their own taxi-hailing business. With features like real-time tracking, multiple payment options, and user-friendly interfaces for both drivers and passengers, RiderX provides a seamless experience for all users.";
  const initial = "Schedule Demo";
  const backgroundColor = "#0F479C";
  const border = "0px solid #0F479C";
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

export default UberX11;
