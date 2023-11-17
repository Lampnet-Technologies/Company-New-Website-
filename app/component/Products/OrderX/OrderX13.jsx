import React from "react";
import Mockup1 from "../../../../public/images/OrderXMarketPlaceB.svg";
import Product11 from "../ProductProps/Product11";

const OrderX13 = () => {
  const header = "OrderX Gas Ordering & Delivery App";
  const body =
    "LampNet Course Creation and E-learning App is an enterprise learning management system engineered to support the most demanding and complex learning ecosystems. Simplify e-Learning  with LampNet learning solution.";
  const initial = "Schedule Demo";
  return (
    <div>
      <Product11
        header={header}
        body={body}
        initial={initial}
        image={Mockup1}
      />
    </div>
  );
};

export default OrderX13;
