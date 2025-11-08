import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/Realtime2.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/FeedTime1.svg";
import Portfolio2 from "../../../../public/images/FeedTime2.svg";

const FeedX4 = () => {
  const header = "About FoodX";
  const subheader = "Leverage New Possibilities with FoodX";
  const body = "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";

  const title = "User-friendly interfaces for a streamlined online food delivery business";
  const tag1 = "Live MapReal-time Tracking";
  const taga = "Your customers can get an idea of the estimated time of arrival for your parcel with real map";
  const tag2 = "Multiple Payment Option";
  const tagb = "Your customers easily make payments with multiple authenticated payment gateways for quick payments";
  const tag3 = "Re-order";
  const tagc = "Your customers have convenience to order the same item or multiple with a single tap.";

  const initial = "Download Now";
  const color = "#F6613F";
  const backgroundColor = "#F6613F";
  const border = "0px solid #F6613F";
  const background = "#111827";
  const h2Color = "#fff";
  const pColor = "#fff";
  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        data={data}
        tag1={tag1}
        taga={taga}
        tag2={tag2}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        img={Realtime}
        Circle={Circle}
        initial={initial}
        textColor={color}
        backgroundColor={backgroundColor}
        border={border}
        background={background}
        h2Color={h2Color}
        pColor={pColor}
      />
    </div>
  );
};

export default FeedX4;

const data = [
  {
    id: 1,
    title: "User-friendly interfaces for a streamlined online food delivery business",
    tag1: "Live MapReal-time Tracking",
    taga: "Your customers can get an idea of the estimated time of arrival for your parcel with real map.",
    tag2: "Multiple Payment Option",
    tagb: "Your customers easily make payments with multiple authenticated payment gateways for quick payments.",
    tag3: "Re-Order",
    tagc: "Your customers have convenience to order the same item or multiple with a single tap.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Easy Driver Management and Inventory",
    tag1: "Accept/Reject Delivery",
    taga: "Confirmation for accept/reject delivery request the parcel by customer’s end for security.",
    tag2: "Route Optimization",
    tagb: "Optimize map navigation to deliver the parcel from the shortest route.",
    tag3: "Profile Management/Earnings",
    tagc: "Drivers can update their bio and personal information and track their daily earnings with respect to number of deliveries performed.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Increased Operational Efficiency and Statistical Reports",
    tag1: "Multiple Vendor",
    taga: "The admin can manage multiple restaurants, menus, reviews, discounts and payment from a single account.",
    tag2: "Marketing Tools",
    tagb: "FoodX enables you to create exciting offers, discount coupons, carry out loyalty and affiliate programs to entice customers.",
    tag3: "Report & Analysis",
    tagc: "This critical data is stored in a cloud-based storage and helps you to take insight-driven business decisions.",
    image: Portfolio2,
    Circle: Circle,
  },
];
