import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/UberC.svg";
import Code from "../../../../public/images/UberCode.svg";

const UberX8 = () => {
  const heading = "Fully Customizable To Meet Your Business Needs";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Fintech 360 white-label banking software comes as a collection of configurable standalone modules to handle the core functionality for financial services.";
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
    body: " Integrate CourierX with your existing tools with little or no coding for both native and IOS devices both native and IOS devices",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Effectively scale your business and revenue for the complete success and growth of your company scale your business and revenue for the ",
    image: Clock,
  },
];
