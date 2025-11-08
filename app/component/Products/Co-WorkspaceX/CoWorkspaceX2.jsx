import React from "react";
import Features1 from "../../../../public/images/CoWorkspaceA.svg";
import Features2 from "../../../../public/images/CoWorkspaceB.svg";
import Features3 from "../../../../public/images/CoWorkspaceC.svg";
import Product2 from "../ProductProps/Product2";

const CoWorkspaceX2 = () => {
  const header = "World-Class Features";
  const subHeader = "All the Tools You Need to Manage Your Workspace Efficiently";
  const paragraph =
    "Co-WorkspaceX combines flexibility, automation, and intelligent insights to help coworking spaces, offices, and shared environments operate seamlessly. From bookings and billing to analytics and member engagement — everything is unified in one intuitive platform.";
  const color = "#1628F4";

  return (
    <div>
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

export default CoWorkspaceX2;

const data = [
  {
    id: 1,
    body: "Gain real-time insights into space usage, bookings, and revenue trends with powerful analytics dashboards.",
    name: "Smart Analytics",
    image: Features1,
  },
  {
    id: 2,
    body: "Automate bookings, payments, and membership renewals to save time and eliminate manual errors.",
    name: "Automated Workflows",
    image: Features2,
  },
  {
    id: 3,
    body: "Easily scale your workspace management across multiple locations while maintaining full control and flexibility.",
    name: "Scalability",
    image: Features3,
  },
  {
    id: 4,
    body: "Connect seamlessly with CRMs, payment gateways, and communication tools through secure API integrations.",
    name: "Third-Party Integrations",
    image: Features1,
  },
];
