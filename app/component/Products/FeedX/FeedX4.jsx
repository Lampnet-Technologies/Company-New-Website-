import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/Realtime2.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/FeedTime1.svg";
import Portfolio2 from "../../../../public/images/FeedTime2.svg";

const FeedX4 = () => {
  const header = "About FoodX";
  const subheader = "Leverage new possibilities with FoodX";
  const body =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
  const title =
    "User-friendly interfaces for a streamlined online food delivery business";
  const tag1 = "Live MapReal-time Tracking";
  const taga =
    "Your customers can get an idea of the estimated time of arrival for your parcel with real map";
  const tag2 = "Multiple Payment Option";
  const tagb =
    "Your customers easily make payments with multiple authenticated payment gateways for quick payments";
  const tag3 = "Re-order";
  const tagc =
    "Your customers have convenience to order the same item or multiple with a single tap.";

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
    title: "Real-Time Tracking and Local language Integration",
    tag1: "Live Map",
    taga: "Fully-integrated live map view and notifications that keeps you and your customers updated with real-time driver locations.",
    tag2: "Streamlined Communication",
    tagb: "Enhances  customer communication by allowing them to contact their dispatchers, drivers, and admin with just a single tap.",
    tag3: "Privacy and Security",
    tagc: "You may keep calls anonymous for safety and privacy without fear of security breach.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Express & Scheduled Delivery Options",
    tag1: "Express and Advance booking",
    taga: "Supports express & advance booking for customers which helps your drivers manage delivery assignments.",
    tag2: "Optimization",
    tagb: "Optimize dynamic routing, order tracking, and delivery scheduling and accuracy",
    tag3: "Easy Allocation ",
    tagc: "Effectively manage deliveries and spend less time allocating tasks to your drivers",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "In-app Chat & Insightful Report ",
    tag1: "On-demand Reports",
    taga: "Our last mile software includes on-demand reports & pivotal data presented in a graphical form to reduce cognitive load ",
    tag2: "Optimization",
    tagb: "Your admin will get clear updates about the business like the usage of resources, performance of delivery agents, delivery status, etc",
    tag3: "Cloud-based Storage",
    tagc: "This critical data is stored in a cloud-based storage and helps you to take insight-driven business decisions.",
    image: Portfolio2,
    Circle: Circle,
  },
];
