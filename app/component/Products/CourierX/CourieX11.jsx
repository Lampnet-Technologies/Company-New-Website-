import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup1.svg";

const CourieX11 = () => {
  const header = "Launch your Ready-to-Use Delivery & Logistics Mobile App";
  const body =
    "Streamline your delivery needs with CourierX - the ultimate courier and logistics app. From same-day deliveries to international shipments, we've got you covered. Our user-friendly platform allows you to track your packages in real-time and communicate with your courier effortlessly. Experience the convenience of CourierX for all your delivery requirements. Get your customized app today!";
  const initial = "Schedule Demo";
  const backgroundColor = "#54BD95";
  const border = "0px solid #54BD95";

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

export default CourieX11;
