import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/CoWorkEvent.svg";

const CoWorkspaceX11 = () => {
  const header = "Event & Office Space Booking App";
  const body =
    "Co-WorkspaceX is a smart and flexible booking management system designed for coworking spaces, offices, and event venues. Simplify reservations, manage memberships, and optimize space utilization—all from one intuitive platform.";
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

export default CoWorkspaceX11;
