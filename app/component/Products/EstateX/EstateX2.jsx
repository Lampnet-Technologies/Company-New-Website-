import React from "react";
import Product2 from "../ProductProps/Product2";
import Features1 from "../../../../public/images/EstateX2a.svg";
import Features2 from "../../../../public/images/EstateX2b.svg";
import Features3 from "../../../../public/images/EstateX2c.svg";

const EstateX2 = () => {
  const header = "World-Class Features";
  const subHeader = "Put Your Portfolio on Autopilot with EstateX";
  const paragraph =
    "EstateX is an intelligent property management platform designed to simplify real estate operations. From tenant management and rent collection to maintenance tracking and financial reporting, it automates every aspect of your property portfolio.";
  const color = "#AB0E12";

  return (
    <div>
      <Product2
        color={color}
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default EstateX2;

const data = [
  {
    id: 1,
    name: "Automated Posting",
    body: "Easily list and update property vacancies across multiple platforms automatically, ensuring maximum visibility with minimal effort.",
    image: Features1,
  },
  {
    id: 2,
    name: "Rent Roll Format",
    body: "Generate organized rent roll reports that track tenant payments, lease terms, and upcoming renewals — all in real time.",
    image: Features2,
  },
  {
    id: 3,
    name: "Expense Tracking",
    body: "Monitor and categorize property expenses effortlessly to maintain accurate financial records and optimize cash flow management.",
    image: Features3,
  },
  {
    id: 4,
    name: "Smart Insights",
    body: "Gain actionable analytics and performance metrics to make informed investment decisions and improve overall portfolio returns.",
    image: Features1,
  },
];
