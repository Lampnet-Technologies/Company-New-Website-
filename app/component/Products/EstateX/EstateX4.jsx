import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/AboutEstateX.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/EstateTime1.svg";
import Portfolio2 from "../../../../public/images/EstateTime2.svg";

const EstateX4 = () => {
  const title = "Automate Rent Collection";
  const tag1 = "Book-keeping For Any Portfolio";
  const taga =
    "Keep your bookkeeping complete and accurate. Track every payment, manage accounts payable and reconcile bank accounts automatically.";
  const tag2 = "Vendor Management";
  const tagb =
    "Vendor bills and expenses can be tracked and paid within EstateX, so you’ll never need to enter data twice.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";

  const header = "About MedX";
  const subheader = "You Can Manage Any Door With EstateX";
  const body =
    "Whether you manage five doors or five thousand, you need a simple, unified platform that powers you to be your best";
  const initial = "Download Now";
  const color = "#AB0E12";
  const backgroundColor = "#222";
  const border = "0px solid #222";

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
      />
    </div>
  );
};

export default EstateX4;

const data = [
  {
    id: 1,
    title: "Automate Rent Collection",
    tag1: "Book-keeping For Any Portfolio",
    taga: "Keep your bookkeeping complete and accurate. Track every payment, manage accounts payable and reconcile bank accounts automatically.",
    tag2: "Vendor Management",
    tagb: "Vendor bills and expenses can be tracked and paid within EstateX, so you’ll never need to enter data twice.",
    tag3: "Increased Productivity",
    tagc: "Save time with efficient tenant and lease management features.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Smart Property Listings & Scheduling",
    tag1: "Automated Property Posting",
    taga: "Easily publish and update property listings across multiple platforms with one click — saving hours of manual work.",
    tag2: "Smart Scheduling",
    tagb: "Enable clients to schedule property viewings online and sync availability automatically with your team’s calendar.",
    tag3: "Lead Management",
    tagc: "Capture and track leads efficiently to improve conversions and reduce response times.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Tenant Communication & Reporting",
    tag1: "In-App Messaging",
    taga: "Allow tenants and property managers to communicate directly through the app, reducing missed updates and delays.",
    tag2: "Performance Insights",
    tagb: "Access real-time analytics on occupancy rates, rent payments, and maintenance requests for data-driven decisions.",
    tag3: "Cloud-Based Reports",
    tagc: "All records and reports are securely stored in the cloud for easy access and long-term tracking.",
    image: Portfolio2,
    Circle: Circle,
  },
];
