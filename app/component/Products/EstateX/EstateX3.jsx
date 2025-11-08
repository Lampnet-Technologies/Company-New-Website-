import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/EstateX3a.svg";
import Features4 from "../../../../public/images/EstateX3b.svg";

const EstateX3 = () => {
  const header = "Win Against the Competition";
  const subheader = "White-Label Real Estate Software Built for You";
  const paragraph =
    "Accelerate your real estate business with EstateX — a fully customizable, white-label property management solution designed to fit your brand, operations, and growth goals seamlessly.";
  const color = "#AB0E12";

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

export default EstateX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "100% Customization",
    body: "Tailor EstateX to match your exact business model — from branding and tenant portals to lease automation and payment flows.",
  },
  {
    id: 2,
    image: Features4,
    title: "Source Code Ownership",
    body: "Gain full control and flexibility with complete access to the source code, allowing you to extend, integrate, or scale features without limitations.",
  },
  {
    id: 3,
    image: Features3,
    title: "Scalability and Growth",
    body: "Expand effortlessly as your property portfolio grows, with scalable infrastructure that supports single landlords, agencies, and enterprise-level operations.",
  },
];
