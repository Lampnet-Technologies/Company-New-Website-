import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/SchoolAbout.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/SchoolXTime1.svg";
import Portfolio2 from "../../../../public/images/SchoolXTime2.svg";

const SchoolX4 = () => {
  const title = "Class Management";
  const tag1 = "Faster Learning Approach";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Improved Techy Skills";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About School 360";
  const subheader = "You Can Manage Your School With School 360";
  const body =
    "School 360 helps you efficiently manage all of your processes. Enjoy professional school management for any educational institution, in minutes!";
  const initial = "Download Now";
  const color = "#AB0E12";
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
        data={data}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        img={Realtime}
        Circle={Circle}
        initial={initial}
        textColor={color}
      />
    </div>
  );
};

export default SchoolX4;
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
