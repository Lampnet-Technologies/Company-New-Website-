import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/FintechCircle.svg";

const FIntechX3 = () => {
  const header = "Many Challenges, One Fintech Solution.";
  const subheader = "Empower Financial Institutions with PayX";
  const paragraph =
    "PayX simplifies complex banking and payment challenges with a unified fintech ecosystem — built for banks, startups, and enterprises that demand speed, security, and scalability.";
  const color = "#453787";

  return (
    <div>
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

export default FIntechX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Boost Revenue",
    body: "Enable seamless transactions, digital wallets, and instant payouts to increase customer engagement and drive financial growth.",
  },
  {
    id: 2,
    image: Features3,
    title: "Effortless Integration",
    body: "Integrate PayX APIs with your existing systems for smooth onboarding, KYC verification, payments, and compliance monitoring — all in one place.",
  },
  {
    id: 3,
    image: Features3,
    title: "Enhance Brand Visibility",
    body: "White-label our fintech platform to create your own branded digital banking experience — while we handle the technology and compliance.",
  },
];
