import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/CoWorkRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/WorkspaceTime1.svg";
import Portfolio2 from "../../../../public/images/WorkspaceTime2.svg";

const NCXPOSX4 = () => {
  const title = "Automated Invoicing and Payment";
  const tag1 = "Smart Billing";
  const taga =
    "Automatically generate and send digital invoices for every sale, purchase, or subscription — no manual entry required.";
  const tag2 = "Multiple Payment Options";
  const tagb =
    "Accept cash, card, mobile money, or online payments — all integrated in one seamless checkout system.";
  const tag3 = "Real-time Authorisations";
  const tagc =
    "Track and approve transactions instantly across all branches, ensuring accuracy and transparency.";
  const header = "About NCX POS";
  const subheader = "Everything You Need to Manage Sales, Inventory & Payments";
  const body =
    "NCX Point of Sale is a complete business management and retail solution that brings together invoicing, stock control, branch management, and sales analytics — all in one powerful platform.";
  const initial = "Start Free Trial";
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
        tag2={tag2}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        data={data}
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

export default NCXPOSX4;

const data = [
  {
    id: 1,
    title: "Automated Invoicing and Payment",
    tag1: "Smart Billing",
    taga: "Automatically generate and send digital invoices for every sale, purchase, or subscription — no manual entry required.",
    tag2: "Multiple Payment Options",
    tagb: "Accept cash, card, mobile money, or online payments — all integrated in one seamless checkout system.",
    tag3: "Real-time Authorisations",
    tagc: "Track and approve transactions instantly across all branches, ensuring accuracy and transparency.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Inventory and Stock Management",
    tag1: "Multi-Warehouse Support",
    taga: "Monitor product levels across branches, manage stock transfers, and prevent shortages with automatic restock alerts.",
    tag2: "Barcode & QR Integration",
    tagb: "Simplify tracking and checkout using barcode and QR code scanning for faster operations.",
    tag3: "Purchase Orders",
    tagc: "Easily generate supplier purchase orders and manage incoming inventory directly from your dashboard.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Branch & Sales Reporting",
    tag1: "Centralized Dashboard",
    taga: "View live sales, stock, and revenue data from every branch in one place.",
    tag2: "Analytics & Insights",
    tagb: "Gain a clear overview of your business with profit/loss reports, top-selling products, and staff performance tracking.",
    tag3: "Multi-User Access",
    tagc: "Assign custom roles and permissions to employees while maintaining control and transparency across your organization.",
    image: Portfolio2,
    Circle: Circle,
  },
];
