import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/CoWorkCircle.svg";

const NCXBBX3 = () => {
  const header = "Many Spaces, One Community Solution.";
  const subheader = "What's Included in NCX-BB?";
  const paragraph =
    "NCX-BB provides a comprehensive management system that helps you efficiently streamline operations and reduce resources and costs within your organization.";

  const color = "#d50ac8";

  return (
    <div>
      {" "}
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default NCXBBX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Dashboard App",
    body: "Real-time KPIs & quick actions. Get a complete overview of your business performance with our intuitive dashboard, designed to provide quick access to essential metrics and insights.",
  },
  {
    id: 2,
    image: Features3,
    title: "Sales App",
    body: "Invoices, returns, payments. Quick checkout with barcode scanning and returns. Works offline too. Perfect for retail businesses.",
  },
  {
    id: 3,
    image: Features3,
    title: "POS App",
    body: "Fast checkout & receipts. Quick checkout with barcode scanning and returns. Works offline too. Perfect for retail businesses.",
  },
  {
    id: 4,
    image: Features3,
    title: "CRM App",
    body: "Balances, credit, history. Manage your customers and suppliers with ease. Keep track of balances, credit limits, and transaction history all in one place.",
  },
];
