import React from "react";
import Features1 from "../../../../public/images/CoWorkspaceA.svg";
import Features2 from "../../../../public/images/CoWorkspaceB.svg";
import Features3 from "../../../../public/images/CoWorkspaceC.svg";
import Product2 from "../ProductProps/Product2";

const NCXPOSX2 = () => {
  const header = "Core Features & Capabilities";
  const subHeader = "Why Choose NCX Point of Sale?";
  const paragraph =
    "Multi Branch POS comes packed with powerful features to streamline your business operations.";
  const color = "#F76C6C";
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

export default NCXPOSX2;

const data = [
  {
    id: 1,
    body: "Robust inventory management system to track stock levels, manage suppliers, and streamline ordering processes.",
    name: "Inventory Management",
    image: Features1,
  },
  {
    id: 2,
    body: "Manage multiple store locations from a single platform, ensuring consistent operations and reporting across all branches.",
    name: "Multi-Branch Operations",
    image: Features2,
  },
  {
    id: 3,
    body: "Comprehensive user and role management features to control access and permissions for staff members.",
    name: "User & Role Management",
    image: Features3,
  },
  {
    id: 4,
    body: "Extensive integrations with third-party applications and services to enhance functionality and streamline workflows.",
    name: "Integrations & Extensions",
    image: Features1,
  },
];
