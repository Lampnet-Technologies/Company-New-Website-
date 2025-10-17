import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/CoWorkRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/WorkspaceTime1.svg";
import Portfolio2 from "../../../../public/images/WorkspaceTime2.svg";

const CoWorkspaceX4 = () => {
  const title = "Automated Invoicing and Payment";
  const tag1 = "Communities";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Easy booking";
  const tagb =
    "Stay connected and collaborate better with co-learners so you’ll never need to enter data twice.";
  const tag3 = "Real-time Authorisations";
  const tagc = "Save time with efficient patient & study management features.";

  const header = "About Co-WorkspaceX";
  const subheader = "What You Can Do with Co-WorkspaceX";
  const body =
    "Co-WorkspaceX is a smart coworking and space management platform designed to simplify operations for shared offices, business hubs, and flexible work environments. From booking desks and meeting rooms to managing memberships, payments, and analytics, Co-WorkspaceX brings your entire workspace ecosystem under one powerful platform.";

  const initial = "Download Now";
  const color = "#1628F4";
  const backgroundColor = "#1628F4";
  const border = "0px solid #1628F4";
  return (
    <div>
      {" "}
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

export default CoWorkspaceX4;

const data = [
  {
    id: 1,
   title: "Automated Invoicing and Payment",
   tag1: "Communities",
   taga: "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.",
   tag2: "Easy booking",
   tagb: "Stay connected and collaborate better with co-learners so you’ll never need to enter data twice.",
   tag3: "Real-time Authorisations",
   tagc: "Save time with efficient patient & study management features.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Member & Visitor Management",
    tag1: "Communicate With a Fundraiser",
    taga: "Seamless two-factor authentication to comply with SCA under PSD2 directive.",
    tag2: "Manage Wallets",
    tagb: "Role-based and different level access rights for multi-users.",
    tag3: "Encryption ",
    tagc: "Encrypted connection between all components of the solution.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Access Control & Analytics",
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
