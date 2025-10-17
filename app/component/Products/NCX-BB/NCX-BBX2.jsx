import React from "react";
import Features1 from "../../../../public/images/CoWorkspaceA.svg";
import Features2 from "../../../../public/images/CoWorkspaceB.svg";
import Features3 from "../../../../public/images/CoWorkspaceC.svg";
import Product2 from "../ProductProps/Product2";

const NCXBBX2 = () => {
  const header = "Core Features & Capabilities";
  const subHeader = "Why Choose NCX Billing Book?";
  const paragraph =
    "All-in-one POS, Inventory, Accounting & CRM. Empower your business with NCX Billing Book, the ultimate solution for seamless point-of-sale and inventory management. Designed to streamline operations, enhance customer experiences, and drive growth, NCX Billing Book is your trusted partner in business success.";
  const color = "#d50ac8";
  return (
    <div>
      {" "}
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default NCXBBX2;

const data = [
  {
    id: 1,
    body: "Quick checkout with barcode scanning and returns. Works offline too.",
    name: "Fast POS",
    image: Features1,
  },
  {
    id: 2,
    body: "Quote, bill and report in multiple currencies with proper conversions. Perfect for global businesses.",
    name: "Multi-Currency Billing",
    image: Features2,
  },
  {
    id: 3,
    body: "Send targeted offers, payment reminders and announcements instantly. Just a click away.",
    name: "Promotional SMS & Email",
    image: Features3,
  },
  {
    id: 4,
    body: "Per-location stock, user roles and permissions. The works for multi-store businesses.",
    name: "Multi-Warehouse",
    image: Features1,
  },
   {
    id: 5,
    body: "Variants, stock alerts, transfers and CSV tools. Manage your inventory like a pro.",
    name: "Inventory Control",
    image: Features2,
  },
];
