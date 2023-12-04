import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/Features6.svg";
import Features4 from "../../../../public/images/Features7.svg";

const FeedX3 = () => {
  const header = "Win Against The Competition ";
  const subheader = "White-Label Software for Your Needs";
  const paragraph =
    "Expand Your On-demand Delivery Business with the Influence of our ready-to-use 100% Customizable Software Solution for profitable results in your Company ";
  const color = "#F6613F";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default FeedX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "100% Customization",
    body: "Ready-to-use and fully customizable features of our on-demand delivery software to suit your business needs to suit your business needs",
  },
  {
    id: 2,
    image: Features4,
    title: "Source Code Ownership",
    body: " Integrate CourierX with your existing tools with little or no coding for both native and IOS devices both native and IOS devices",
  },
  {
    id: 3,
    image: Features3,
    title: "Scalability and Growth",
    body: "Effectively scale your business and revenue for the complete success and growth of your company scale your business and revenue for the",
  },
];
