import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/HotelRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/HotelTime1.svg";
import Portfolio2 from "../../../../public/images/HotelTime2.svg";

const HotelX4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Multiple Payment Option";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About HotelX";
  const subheader = "The Complete Hotel Tech Solution";
  const body =
    "Improve your hotel and resort guest experience and maximise your profits with a smart cloud-based property management software from any device.";
  const initial = "Download Now";
  const color = "#34A853";
  const backgroundColor = "#34A853";
  const border = "0px solid #34A853";
  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        data={data}
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

export default HotelX4;

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
