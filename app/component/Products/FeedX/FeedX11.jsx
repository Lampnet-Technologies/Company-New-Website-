import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/MockupX.svg";

const FeedX11 = () => {
  const header = "Crave More Customers? Launch Your Food App In Minutes!";
  const body =
  "Get started quickly with our ready-to-use food ordering and delivery app. Our ready-made food ordering app gets you online fast. Customers can browse menus, order, and track deliveries – all within your branded app. Increase sales and delight customers without the hassle of custom development.";
  const initial = "Schedule Demo";
  const backgroundColor = "#F77E63";
  const border = "0px solid #F77E63";

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

export default FeedX11;
