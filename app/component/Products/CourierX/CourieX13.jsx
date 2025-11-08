import React from "react";
import Product11 from "../ProductProps/Product11";
import Mockup1 from "../../../../public/images/Mockup3.svg";
const CourieX13 = () => {
  const header = "Customized Supply Chain & Delivery Management Solution";
  const body =
    "Take control and optimize your entire logistics network with our bespoke supply chain and delivery management software. We collaborate with you to understand your unique challenges and craft a solution that streamlines workflows, boosts inventory visibility, and empowers data-driven decision-making. From real-time shipment tracking and automated reporting to route optimization and integration with existing systems, our custom software empowers efficiency and profitability. Increase customer satisfaction, reduce costs, and gain a competitive edge with a solution built to drive your success.";
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

export default CourieX13;
