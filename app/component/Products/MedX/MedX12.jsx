import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MedxPharm.svg";

const MedX12 = () => {
  const header = "PharmX Medicine Delivery App";
  const body =
    "PharmX is an end-to-end medicine ordering and delivery solution designed for pharmacies, hospitals, and healthcare providers. It enables customers to order prescriptions online, track deliveries in real-time, and make secure payments — all within one seamless platform. PharmX helps you modernize your pharmacy operations, improve accessibility, and deliver healthcare with speed and convenience.";
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

export default MedX12;
