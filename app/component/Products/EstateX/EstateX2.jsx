import React from "react";
import Product2 from "../ProductProps/Product2";
import Features1 from "../../../../public/images/EstateX2a.svg";
import Features2 from "../../../../public/images/EstateX2b.svg";
import Features3 from "../../../../public/images/EstateX2c.svg";

const EstateX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Put Your Portfolio On Autopilot With Our EstateX";
  const paragraph =
    "MedX is built to handle everything that clinics both large and small need to run smoothly. Forget spreadsheets, integrations, paper notes and scanning - do it all from one easy to use tool.";
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
    body: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ",
    name: "Automated Posting",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our API development and integration services, ensuring that your business data is protected from unauthorized access.",
    name: "Rent Roll Format",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Expense Tracking",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
