import React from "react";
import Features1 from "../../../../public/images/UberA.svg";
import Features2 from "../../../../public/images/UberB.svg";
import Features3 from "../../../../public/images/UberC.svg";
import Product2 from "../ProductProps/Product2";

const UberX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core Functionality – Everything You Need";
  const paragraph =
    "At RiderX, we understand that every business is unique. That's why we offer customizable features that can be tailored to meet your specific needs. Whether you're looking to add new functionality or modify existing features, our team of experts is here to help you create a solution that works for you.";
  const color = "#0F479C";

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

export default UberX2;

const data = [
  {
    id: 1,
    name: "Ratings & Reviews",
    body: "Allow users to rate rides and drivers, leave feedback, and build trust through transparent reviews that enhance customer experience.",
    image: Features1,
  },
  {
    id: 2,
    name: "Ride Sharing & Pooling",
    body: "Enable multiple passengers heading in the same direction to share rides, reduce costs, and optimize driver efficiency in real time.",
    image: Features2,
  },
  {
    id: 3,
    name: "Split Fare Payments",
    body: "Offer users the convenience to split payments among passengers seamlessly and securely within the app, improving user satisfaction.",
    image: Features3,
  },
  {
    id: 4,
    name: "Driver & Fleet Management",
    body: "Easily monitor driver performance, manage availability, and track vehicle activity to ensure smooth, reliable operations.",
    image: Features1,
  },
];
