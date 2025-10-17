import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/OrderXRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/OderTime1.svg";
import Portfolio2 from "../../../../public/images/OderTime2.svg";

const OrderX4 = () => {
  const title = "Clear and Complete Reporting";
  const tag1 = "Order Insights";
  const taga =
    "Access real-time order analytics, from sales trends to delivery performance, enabling smarter decisions with every transaction.";
  const tag2 = "Seamless Tracking";
  const tagb =
    "Monitor every stage of your order—from placement to delivery—through an intuitive dashboard with live updates.";
  const tag3 = "Instant Authorizations";
  const tagc =
    "Authorize, verify, and approve transactions in real time to minimize errors and improve workflow efficiency.";
  const header = "About OrderX";
  const subheader = "Track Anything and Everything with Ease";
  const body =
    "OrderX is a powerful order and delivery management platform designed to centralize operations, automate logistics, and deliver data-driven insights in one place.";
  const initial = "Download Now";
  const color = "#F76C6C";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";

  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        taga={taga}
        data={data}
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

export default OrderX4;

const data = [
  {
    id: 1,
    title: "Clear and Complete Reporting",
    tag1: "Order Insights",
    taga: "Access real-time order analytics, from sales trends to delivery performance, enabling smarter decisions with every transaction.",
    tag2: "Seamless Tracking",
    tagb: "Monitor every stage of your order—from placement to delivery—through an intuitive dashboard with live updates.",
    tag3: "Instant Authorizations",
    tagc: "Authorize, verify, and approve transactions in real time to minimize errors and improve workflow efficiency.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Flexible Delivery and Scheduling Options",
    tag1: "Instant & Scheduled Orders",
    taga: "Allow customers to place instant orders or schedule future deliveries with automated reminders and updates.",
    tag2: "Optimized Routing",
    tagb: "Dynamic routing engine ensures faster deliveries, reduced fuel costs, and improved operational efficiency.",
    tag3: "Smart Allocation",
    tagc: "Automatically assign orders to the nearest and most available drivers for better turnaround time.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "In-App Communication & Insightful Reports",
    tag1: "Custom Reports",
    taga: "Generate detailed performance and delivery reports to understand trends, costs, and customer satisfaction levels.",
    tag2: "Operational Insights",
    tagb: "Gain real-time visibility into key metrics like order flow, delivery speed, and peak performance hours.",
    tag3: "Cloud-Based Storage",
    tagc: "Securely store all transaction and performance data in the cloud for easy access and long-term analytics.",
    image: Portfolio2,
    Circle: Circle,
  },
];
