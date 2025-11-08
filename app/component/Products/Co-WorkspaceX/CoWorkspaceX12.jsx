import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/CoWorkEvent.svg";

const CoWorkspaceX12 = () => {
  const header = "Estate & Office Space Booking App";
  const body =
    "Co-WorkspaceX Estate & Office Space Booking App offers an all-in-one platform for managing property listings, workspace reservations, and client interactions. Streamline bookings, automate payments, and enhance the experience for tenants and business owners alike.";
  const initial = "Schedule Demo";
  const backgroundColor = "#1628F4";
  const border = "0px solid #1628F4";
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

export default CoWorkspaceX12;
