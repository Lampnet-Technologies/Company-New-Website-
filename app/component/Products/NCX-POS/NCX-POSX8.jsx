import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/CoWorkerCircle.svg";
import Code from "../../../../public/images/CoWorkerCode.svg";

const NCXPOSX8 = () => {
  const heading = "Ready to Transform Your Business?";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Choose the perfect solution for your business needs. Start with a free trial or get the complete package today.";
  const color = "#F76C6C";

  return (
    <div>
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

export default NCXPOSX8;
const data = [
  {
    id: 1,
    header: "Start with a Free Trial",
    body: "Get started with a 14-day free trial of Multi Branch POS and explore all its features with no commitment.",
    image: Clock,
  },
  {
    id: 2,
    header: "Try Multi Branch POS",
    body: "Experience the full capabilities of Multi Branch POS with a 30-day free trial of our complete package. One-time $55 setup fee applies.",
    image: Code,
  },
  {
    id: 3,
    header: "Buy via Gumroad",
    body: "Purchase Multi Branch POS directly from Gumroad and get instant access to the software and all its features.",
    image: Clock,
  },
  {
    id: 4,
    header: "Add SaaS Module",
    body: "Unlock the power of SaaS with our add-on module for Multi Branch POS. Manage subscriptions, billing, and customer accounts with ease. One-time $110 setup fee applies.",
    image: Clock,
  },
];
