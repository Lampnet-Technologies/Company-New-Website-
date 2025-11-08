import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/RestaurantRealtime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/RestaurantTime1.svg";
import Portfolio2 from "../../../../public/images/RestaurantTime2.svg";

const Restaurant4 = () => {
  const title = "Customer Application";
  const tag1 = "Real-time Tracking";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Multiple Payment Option";
  const tagc = "Save time with efficient patient & study management features.";

  const header = "About Restaurant 360";
  const subheader = "Steller Features For Your Restaurant and Customers";
  const body =
    "Unleash Your Restaurant's Potential With The Industry’s Only Restaurant Enterprise Management Platform.";
  const initial = "Download Now";
  const color = "#AB0E12";

  return (
    <div>
      {" "}
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        taga={taga}
        tag2={tag2}
        tagb={tagb}
        data={data}
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

export default Restaurant4;

const data = [
  {
    id: 1,
    title: "Customer Application",
    tag1: "Real-time Tracking",
    taga: "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.",
    tag2: "Easy Booking",
    tagb: "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.",
    tag3: "Multiple Payment Option",
    tagc: "Save time with efficient patient & study management features.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Drivers Application",
    tag1: "Map Navigation",
    taga: "Seamless two-factor authentication to comply with SCA under PSD2 directive.",
    tag2: "Ride Statics",
    tagb: "Get a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills",
    tag3: "Profile Management",
    tagc: "Manage driver profiles, track earnings, and monitor performance all in one place.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Drive Better Performance with Data and Analytics",
    tag1: "Resource Tracking",
    taga: "Keep track of tuition fees, outstanding payments and installments.",
    tag2: "Payment Collection",
    tagb: "Receive payments from popular payment systems, such as Venmo, Google Pay, PayPal, Stripe, Apple Pay and Braintree.",
    tag3: "Automatic Booking",
    tagc: "Track your payroll, per school period Track your payroll, per school period.",
    image: Portfolio2,
    Circle: Circle,
  },
];
