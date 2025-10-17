import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/ThriftXAsset.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/ThriftTiime1.svg";
import Portfolio2 from "../../../../public/images/ThriftTiime2.svg";

const ThriftX4 = () => {
  const title = "Data to Power Unparalleled Flexibility";
  const tag1 = "Manage Transactions";
  const taga =
    "Streamline and automate transaction management, from initiation to settlement, ensuring accuracy and efficiency.";
  const tag2 = "Set Up Fees & Commissions";
  const tagb =
    "Enhances  customer communication by allowing them to contact their dispatchers, drivers, and admin with just a single tap.";
  const tag3 = "Real-time Authorisations";
  const tagc = "Real-time transaction authorizations and verifications.";

  const header = "About ThriftX 360";
  const subheader = "You Can Manage Your Assests With ThriftX";
  const body =
    "ThriftX helps you efficiently manage all of your processes. Enjoy professional investment management for any financial institution, in minutes!";
  const initial = "Download Now";
  const color = "#E47E1F";
  const backgroundColor = "#E47E1F";
  const border = "0px solid #E47E1F";

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

export default ThriftX4;

const data = [
  {
    id: 1,
    title: "Data to Power Unparalleled Flexibility",
    tag1: "Manage Transactions",
    taga: "Streamline and automate all financial transactions, from initiation to settlement, ensuring speed, accuracy, and compliance.",
    tag2: "Set Up Fees & Commissions",
    tagb: "Easily configure fees, commissions, and interest rates to match your business model, keeping operations flexible and transparent.",
    tag3: "Real-time Authorizations",
    tagc: "Authorize and verify transactions in real-time to enhance security and operational efficiency.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Comprehensive Investment Tools",
    tag1: "Portfolio Management",
    taga: "Monitor and manage diverse investment portfolios with real-time insights, analytics, and performance tracking.",
    tag2: "Risk & Compliance",
    tagb: "Ensure regulatory compliance and minimize risks through advanced monitoring and automated alerts.",
    tag3: "Custom Reporting",
    tagc: "Generate insightful, on-demand reports for informed decision-making and strategic planning.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Secure Communication & Data Insights",
    tag1: "Client Messaging",
    taga: "Communicate securely with clients and stakeholders through integrated messaging within the platform.",
    tag2: "Analytics Dashboard",
    tagb: "Gain actionable insights with clear dashboards showing transactions, investment performance, and account activity.",
    tag3: "Cloud-based Storage",
    tagc: "All critical financial data is securely stored in the cloud, enabling insight-driven decisions anytime, anywhere.",
    image: Portfolio2,
    Circle: Circle,
  },
];
