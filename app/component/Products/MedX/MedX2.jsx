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

  const color = {
    h6: "#3E83EA",
  };

  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        color={color}
      />
    </div>
  );
};

export default MedX2;

const data = [
  {
    id: 1,
    body: "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ",
    name: "Patient Check-In",
    image: Features1,
  },
  {
    id: 2,
    body: " Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ",
    name: "Location Accuracy",
    image: Features2,
  },
  {
    id: 3,
    body: "We optimize API performance and functionality, allowing your business to save time and resources, automate tasks, and simplify workflows",
    name: "Custom Workflows",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Features1,
  },
];
