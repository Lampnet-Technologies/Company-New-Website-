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
    title: "Class Management",
    tag1: "Faster Learning Approach",
    taga: "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.",
    tag2: "Improved Techy Skills",
    tagb: "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.",
    tag3: "Increased Productivity",
    tagc: "Save time with efficient patient & study management features.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Administrations & Admissions",
    tag1: "Seamless Training",
    taga: "Create a seamless representation of classes and training subjects, in mere moments.",
    tag2: "Easy Admission",
    tagb: "Register new students or add new ones, in seconds; assign them to groups, classes and subjects.",
    tag3: "Attendance Management",
    tagc: "Keep students and Parents updated on attendance, performance, timetables, payments and incoming communications through their own portal.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Budget & Financial Mangement",
    tag1: "Revenue Tracking",
    taga: "Keep track of tuition fees, outstanding payments and installments.",
    tag2: "Payment Collection",
    tagb: "Receive payments from popular payment systems, such as Venmo, Google Pay, PayPal, Stripe, Apple Pay and Braintree.",
    tag3: "Track Payroll",
    tagc: "Track your payroll, per school period Track your payroll, per school period.",
    image: Portfolio2,
    Circle: Circle,
  },
];
