import React from "react";
import Product2 from "../ProductProps/Product2";
import Features1 from "../../../../public/images/Medx1.svg";
import Features2 from "../../../../public/images/Medx2.svg";
import Features3 from "../../../../public/images/Medx3.svg";

const MedX2 = () => {
  const header = "Word-Class Features";
  const subHeader =
    "MedX Has All The Flexibility You Need To Stay Ahead of The Competition";
  const paragraph =
    "MedX is built to handle everything that clinics both large and small need to run smoothly. Forget spreadsheets, integrations, paper notes and scanning - do it all from one easy to use tool.";

  const color = "#3E83EA";

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

export default MedX2;

const data = [
  {
    id: 1,
    body: "Enable fast and secure digital patient check-ins, minimizing wait times and ensuring accurate record keeping from the moment patients arrive.",
    name: "Smart Patient Check-In",
    image: Features1,
  },
  {
    id: 2,
    body: "Use advanced room-level tracking to locate patients, staff, and equipment instantly — enhancing safety, workflow, and overall hospital efficiency.",
    name: "Real-Time Location Tracking",
    image: Features2,
  },
  {
    id: 3,
    body: "Automate scheduling, billing, and administrative processes with flexible workflows designed to match your clinic’s unique operational needs.",
    name: "Customizable Workflows",
    image: Features3,
  },
  {
    id: 4,
    body: "Keep patient information secure with role-based access, encryption, and HIPAA-compliant data management — ensuring full privacy and compliance.",
    name: "Advanced Security & Compliance",
    image: Features1,
  },
  {
  id: 5,
  body: "Gain insights into patient flow, staff performance, and facility utilization through visual dashboards and detailed analytics.",
  name: "Analytics & Performance Insights",
  image: Features2,
},
];
