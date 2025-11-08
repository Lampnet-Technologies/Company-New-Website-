import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/UberC.svg";
import Code from "../../../../public/images/UberCode.svg";

const UberX8 = () => {
  const heading = "Fully Customizable To Meet Your Business Needs";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Our Uber clone app, RiderX, offers a range of customizable features that allow you to tailor the app to your specific business requirements. From branding and user interface design to payment options and ride preferences, you have the flexibility to create a unique experience for your users.";
  const color = "#0F479C";

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

export default UberX8;

const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Ready-to-use and fully customizable features of our on-demand delivery software to suit your business needs to suit your business needs",
    image: Clock,
  },
  {
    id: 2,
    header: "Source Code Ownership",
    body: " Integrate RiderX with your existing tools with little or no coding for both native and IOS devices both native and IOS devices",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Easily scale your ride-hailing business as it grows, adding new features and functionalities to meet evolving customer demands.",
    image: Clock,
  },
];
