import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/UberXTaxiB.svg";

const UberX13 = () => {
  const header = "Car Rental App";
  const body =
    "RiderX Car Rental App is a comprehensive solution that enables entrepreneurs to launch their own car rental business. With features like real-time tracking, multiple payment options, and user-friendly interfaces for both renters and owners, RiderX provides a seamless experience for all users.";
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

export default UberX13;
