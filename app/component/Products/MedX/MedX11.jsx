import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup1Medx.svg";

const MedX11 = () => {
  const header = "Craft the Perfect Patient Experience with a Custom MedX Doctor Booking App";
  const body =
    "Revolutionize patient care with a bespoke MedX app built to your specific needs. Empower patients to easily schedule appointments, manage health records, and communicate directly with your practice - all within a user-friendly, branded app.";
  const initial = "Schedule Demo";
  const backgroundColor = "#3E83EA";
  const border = "0px solid #3E83EA";
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

export default MedX11;
