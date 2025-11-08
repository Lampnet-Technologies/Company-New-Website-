import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/HotelRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/HotelTime1.svg";
import Portfolio2 from "../../../../public/images/HotelTime2.svg";

const HotelX4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Booking";
  const taga =
    "Guests can view room availability, make reservations, and track their booking status in real time.";
  const tag2 = "Easy Check-In & Check-Out";
  const tagb =
    "Streamline guest arrivals and departures with a seamless digital check-in and check-out process.";
  const tag3 = "Multiple Payment Options";
  const tagc =
    "Offer guests flexible payment methods, including card, mobile wallets, and online banking, for convenience.";
  const header = "About HotelX";
  const subheader = "The Complete Hotel Tech Solution";
  const body =
    "Enhance your hotel or resort operations and elevate guest experience with a smart, cloud-based property management system accessible from any device.";
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
    title: "Customer Application",
    tag1: "Real-time Booking",
    taga: "Guests can view room availability, make reservations, and track their booking status in real time.",
    tag2: "Easy Check-In & Check-Out",
    tagb: "Streamline guest arrivals and departures with a seamless digital check-in and check-out process.",
    tag3: "Multiple Payment Options",
    tagc: "Offer guests flexible payment methods, including card, mobile wallets, and online banking, for convenience.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Room & Service Management",
    tag1: "Room Availability",
    taga: "Keep all room information updated in real-time so guests can book or modify reservations effortlessly.",
    tag2: "Service Requests",
    tagb: "Allow guests to request room services, housekeeping, or amenities directly through the app.",
    tag3: "Automated Notifications",
    tagc: "Notify guests instantly about confirmations, special offers, or any updates regarding their stay.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Insight & Analytics",
    tag1: "Guest Behavior Insights",
    taga: "Analyze guest preferences and behavior to offer personalized experiences and promotions.",
    tag2: "Revenue Tracking",
    tagb: "Monitor booking trends and revenue in real time to optimize pricing and occupancy.",
    tag3: "Cloud-Based Data",
    tagc: "Securely store all guest and booking data in the cloud for easy access and insight-driven decisions.",
    image: Portfolio2,
    Circle: Circle,
  },
];
