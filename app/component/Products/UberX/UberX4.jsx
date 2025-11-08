import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/UberRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/UberXTime1.svg";
import Portfolio2 from "../../../../public/images/UberXTime1.svg";

const UberX4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "Track your ride in real-time with integrated GPS updates, allowing customers to see driver locations and estimated arrival times effortlessly.";
  const tag2 = "Easy Booking";
  const tagb =
    "Book rides instantly with a simple, user-friendly interface. Save favorite destinations and schedule rides ahead of time for convenience.";
  const tag3 = "Multiple Payment Options";
  const tagc =
    "Choose from various secure payment methods including cards, wallets, and cash for a flexible checkout experience.";
  const header = "About RiderX";
  const subheader = "Powerful Features For Riders, Drivers, and Admins";
  const body =
    "The RiderX on-demand ride-hailing platform offers modern, intuitive apps built to ensure smooth and efficient operations for both drivers and customers.";
  const initial = "Download Now";
  const color = "#0F479C";
  const backgroundColor = "#0F479C";
  const border = "0px solid #0F479C";

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
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default UberX4;

const data = [
  {
    id: 1,
    title: "Customer Application",
    tag1: "Real-time Tracking",
    taga: "Track your driver’s location in real-time with precise GPS updates and instant notifications for pickup and arrival times.",
    tag2: "Easy Booking",
    tagb: "Effortlessly book rides through an intuitive interface with options for instant, scheduled, or recurring bookings.",
    tag3: "Multiple Payment Options",
    tagc: "Pay securely using multiple methods including credit cards, mobile wallets, or cash — offering total payment flexibility.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Driver Application",
    tag1: "Smart Navigation",
    taga: "Get optimized routes with real-time traffic updates and navigation assistance to ensure faster trip completions.",
    tag2: "Earnings Dashboard",
    tagb: "Drivers can easily track daily rides, payments, and earnings through an intuitive dashboard.",
    tag3: "Availability Control",
    tagc: "Drivers can switch availability on or off and manage their trip requests effortlessly.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Admin Management Dashboard",
    tag1: "Real-time Analytics",
    taga: "Monitor live trips, revenue, and platform performance with real-time metrics and analytics tools.",
    tag2: "User & Fleet Management",
    tagb: "Manage customers, drivers, and vehicles all in one centralized system.",
    tag3: "Automated Reports",
    tagc: "Generate instant reports for insights on operations, efficiency, and growth trends.",
    image: Portfolio2,
    Circle: Circle,
  },
];
