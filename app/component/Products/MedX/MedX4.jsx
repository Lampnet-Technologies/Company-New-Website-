import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/AboutMedX.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/MedXTime1.svg";
import Portfolio2 from "../../../../public/images/MedXTime2.svg";

const MedX4 = () => {
  const title = "Capture all interactions and know your patients inside out";
  const tag1 = "Detailed Info";
  const taga =
    "Get a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills";
  const tag2 = "Cloud-Based";
  const tagb =
    "Stay up-to-date with your organization’s activities with real-time information that can be accessed anywhere.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";

  const header = "About MedX";
  const subheader = "Leverage new possibilities with MedX";
  const body =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";

  const initial = "Download Now";
  const color = "#3E83EA";
  const backgroundColor = "#3E83EA";
  const border = "0px solid #3E83EA";
  const background = "#111827";
  const h2Color = "#fff";
  const pColor = "#fff";

  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        data={data}
        tag1={tag1}
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
        background={background}
        h2Color={h2Color}
        pColor={pColor}
      />
    </div>
  );
};

export default MedX4;

const data = [
  {
    id: 1,
    title: "Capture all interactions and know your patients inside out",
    tag1: "Detailed Info",
    taga: "Get a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills",
    tag2: "Cloud-Based",
    tagb: "Stay up-to-date with your organization’s activities with real-time information that can be accessed anywhere.",
    tag3: "Increased Productivity",
    tagc: "Save time with efficient patient & study management features.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Increase productivity with customized view of contacts",
    tag1: "Accept/Reject Delivery",
    taga: "Confirmation for accept/reject delivery request the parcel by customer’s end for security.",
    tag2: "Route Optimization",
    tagb: "Optimize map navigation to deliver the parcel from the shortest route.",
    tag3: "Profile Management/Earnings",
    tagc: "Drivers can update their bio and personal information and track their daily earnings with respect to number of deliveries performed.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Make data-driven decisions with reports",
    tag1: "Multiple Vendor",
    taga: "The admin can manage multiple restaurants, menus, reviews, discounts and payment from a single account.",
    tag2: "Marketing Tools",
    tagb: "MedX enables you to create exciting offers, discount coupons, carry out loyalty and affiliate programs.",
    tag3: "Reporting & Analysis",
    tagc: "This critical data is stored in a cloud-based storage and helps you to take insight-driven business decisions.",
    image: Portfolio2,
    Circle: Circle,
  },
];
