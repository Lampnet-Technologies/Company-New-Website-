import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/CoWorkRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/WorkspaceTime1.svg";
import Portfolio2 from "../../../../public/images/WorkspaceTime2.svg";

const NCXBBX4 = () => {
  const title = "Automated Invoicing and Payment";
  const tag1 = "Instant Billing";
  const taga =
    "Generate invoices automatically with tax, discounts, and customer data — no manual entry required.";
  const tag2 = "Multi-Currency Support";
  const tagb =
    "Quote, bill, and report in multiple currencies with real-time conversion accuracy.";
  const tag3 = "Secure Payment Processing";
  const tagc =
    "Accept payments quickly and safely through multiple gateways with instant receipts.";
  const header = "About NCX Billing Book";
  const subheader = "What You Can Do With NCX Billing Book";
  const body =
    "NCX Billing Book combines Point of Sale, Inventory, Accounting, and CRM tools into one fast, reliable, and easy-to-use system. Manage your business seamlessly — online or offline.";
  const initial = "Get Live Demo";
  const color = "#d50ac8";
  const backgroundColor = "#d50ac8";
  const border = "0px solid #d50ac8";

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

export default NCXBBX4;

const data = [
  {
    id: 1,
    title: "Automated Invoicing and Payment",
    tag1: "Instant Billing",
    taga: "Generate and print invoices instantly with tax, discount, and customer info included automatically.",
    tag2: "Multi-Currency Support",
    tagb: "Bill in different currencies and track accurate conversions across all branches.",
    tag3: "Secure Payment Processing",
    tagc: "Accept payments quickly and safely through multiple gateways — online or offline.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Real-Time Inventory & Warehouse Control",
    tag1: "Smart Stock Alerts",
    taga: "Get instant low-stock and expiry notifications to restock efficiently.",
    tag2: "Multi-Warehouse Tracking",
    tagb: "Manage multiple store locations and warehouses from one dashboard.",
    tag3: "Variant Management",
    tagc: "Track product variations by color, size, or batch with ease.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Accounting, CRM & Business Insights",
    tag1: "Automated Accounting",
    taga: "Record expenses, taxes, and profits automatically for clean, reliable books.",
    tag2: "Customer Relationship Management",
    tagb: "Track balances, credits, and sales history for every customer and supplier.",
    tag3: "Performance Reports",
    tagc: "Access insightful reports and KPIs that drive smarter business decisions.",
    image: Portfolio2,
    Circle: Circle,
  },
];
