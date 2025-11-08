import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/RestaurantClock.svg";
import Code from "../../../../public/images/RestaurantCode.svg";

const Restaurant8 = () => {
  const heading = "Fully Customizable to Meet Your Business Needs";
  const mail = "Stay Ahead of the Competition";
  const paragraph1 =
    "Restaurant 360 provides a modular, white-label solution designed to adapt to your restaurant’s specific needs — from order processing and kitchen management to delivery logistics and customer engagement. Enjoy total flexibility to scale and grow effortlessly.";
  const color = "#AB0E12";

  return (
    <div>
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />
    </div>
  );
};

export default Restaurant8;

const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Tailor every aspect of your Restaurant 360 system — from the menu layout to delivery management — ensuring a perfect fit for your business model.",
    image: Clock,
  },
  {
    id: 2,
    header: "Source Code Ownership",
    body: "Gain full control with complete source code ownership. Easily integrate Restaurant 360 with your preferred tools and third-party systems.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Seamlessly expand your operations as your restaurant grows. Restaurant 360 scales effortlessly to support multiple branches, menus, and delivery zones.",
    image: Clock,
  },
];
