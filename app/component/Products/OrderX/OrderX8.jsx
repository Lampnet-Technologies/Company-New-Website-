import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/OrderXCircle.svg";
import Code from "../../../../public/images/OrderXCode.svg";

const OrderX8 = () => {
  const heading = "Fully Customizable To Meet Your Online Store Needs";
  const mail =
    "Get the flexibility and control you need to create a unique shopping experience.";
  const paragraph1 =
    "Our platform is designed to be fully customizable, allowing you to tailor every aspect of your online store to meet your unique business needs and branding. From layout and design to functionality and features, we provide the flexibility you need to create a shopping experience that stands out.";
  const color = "#F76C6C";

  return (
    <div>
      {" "}
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />{" "}
    </div>
  );
};

export default OrderX8;

const data = [
  {
    id: 1,
    header: "Complete Customization",
    body: "Easily tailor every aspect of your OrderX platform—from design to functionality—to perfectly match your business model and workflow.",
    image: Clock,
  },
  {
    id: 2,
    header: "Full Source Code Ownership",
    body: "Gain complete control over your platform with full source code ownership, allowing seamless integration, deeper customization, and long-term scalability.",
    image: Code,
  },
  {
    id: 3,
    header: "Built to Scale",
    body: "Whether you're a startup or an enterprise, OrderX grows with you—supporting increased orders, users, and operations without compromising performance.",
    image: Clock,
  },
];
