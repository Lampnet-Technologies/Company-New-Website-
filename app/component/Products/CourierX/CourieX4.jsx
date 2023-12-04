import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/Realtime.svg";
import Circle from "../../../../public/images/Circle.svg";

const CourieX4 = () => {
  const title = "Real-Time Tracking and Local language Integration";
  const tag1 = "Live Map";
  const taga =
    "Fully-integrated live map view and notifications that keeps you and your customers updated with real-time driver locations.";
  const tag2 = "Streamlined Communication";
  const tagb =
    "Enhances  customer communication by allowing them to contact their dispatchers, drivers, and admin with just a single tap.";
  const tag3 = "Privacy and Security";
  const tagc =
    "You may keep calls anonymous for safety and privacy without fear of security breach.";
  const header = "Our Solutions";
  const subheader = "Transform The Way You Handle Your Logistics Needs";
  const body =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
  const initial = "Download Now";
  const color = "#54BD95";
  const backgroundColor = "#54BD95";
  const border = "0px solid #54BD95";

  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
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
      />
    </div>
  );
};

export default CourieX4;

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
  },
];
