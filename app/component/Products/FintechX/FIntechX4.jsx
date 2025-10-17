import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/FintechOnboard.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/FintechTime1.svg";
import Portfolio2 from "../../../../public/images/FintechTime2.svg";

const FIntechX4 = () => {
  const title = "Onboard Your Customers In Seconds With a Single API Request";
  const tag1 = "Automated ID Verification";
  const taga =
    "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.";
  const tag2 = "Branded Physical and Virtual Cards";
  const tagb =
    "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.";
  const tag3 = "Real-time Authorisations";
  const tagc = "You may keep calls anonymous for safety and privacy without fear of security breach.";

  const header = "About Fintech 360";
  const subheader = "You Can Manage Any Accounts With Fintech 360";
  const body =
    "Fintech 360 Banking Software incorporates all banking and payment functions in one single platform.";
  const initial = "Download Now";
  const color = "#453787";
  const backgroundColor = "#453787";
  const border = "0px solid #453787";

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

export default FIntechX4;
const data = [
  {
    id: 1,
    title: "Onboard Your Customers In Seconds With a Single API Request",
    tag1: "Automated ID Verification",
    taga: "With all-time access to learning resources, learn and study at your own pace, even ahead of the class.",
    tag2: "Branded Physical and Virtual Cards",
    tagb: "Stay connected and collaborate better with co-learners.so you’ll never need to enter data twice.",
    tag3: "Real-time Authorisations",
    tagc: "You may keep calls anonymous for safety and privacy without fear of security breach.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Comply With Security and Privacy Standards",
    tag1: "Regulatory Compliance",
    taga: "Our platform is designed to help you meet industry regulations such as PCI-DSS, GDPR, and PSD2, ensuring your business stays compliant.",
    tag2: "Data Encryption",
    tagb: "We use advanced encryption protocols to protect sensitive data both in transit and at rest, safeguarding your customers' information.",
    tag3: "Access Controls",
    tagc: "Implement role-based access controls to restrict system access to authorized personnel only, enhancing security.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Leverage Data and Analytics to Drive Growth",
    tag1: "Data Visualization",
    taga: "Interactive dashboards provide real-time insights into key performance metrics, helping you make informed decisions.",
    tag2: "Operational Insights",
    tagb: "Monitor transaction patterns, customer behavior, and system performance to optimize operations and enhance user experience.",
    tag3: "Advanced Reporting",
    tagc: "Generate customizable reports to analyze trends, track KPIs, and support strategic planning.",
    image: Portfolio2,
    Circle: Circle,
  },
];
