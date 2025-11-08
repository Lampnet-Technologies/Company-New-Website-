import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/CoWorkCircle.svg";

const NCXPOSX3 = () => {
  const header = "Many Spaces, One Community Solution.";
  const subheader = "What you can do with NCX Point of Sale Software?";
  const paragraph =
    "NCX Point of Sale Software provides a comprehensive management system that helps you efficiently streamline operations and reduce resources and costs within your organization.";

  const color = "#F76C6C";

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

export default NCXPOSX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Point of Sale",
    body: "Fast checkout, multi-payment, barcodes, receipts, and customer display. Works online on any device. Offline works on the installed device (no syncing).",
  },
  {
    id: 2,
    image: Features3,
    title: "Reporting & Analytics",
    body: "Detailed analysis of sales performance reports, Inventory valuation, Customer analytics, Profit & loss statements, Real-time dashboards",
  },
  {
    id: 3,
    image: Features3,
    title: "ERP System",
    body: "Complete business management solution with modules for accounting, inventory, sales, purchasing, CRM, HR, and more.",
  },
];
