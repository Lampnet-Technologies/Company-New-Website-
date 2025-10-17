import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/MedxClock.svg";
import Code from "../../../../public/images/MedxCode.svg";

const MedX8 = () => {
  const heading = "White-Label Healthcare Platform for Your Brand";
  const mail = "Outpace the Competition with MedX";
  const paragraph1 =
    "Empower your healthcare organization with our ready-to-deploy, fully customizable MedX software solution. Deliver secure, patient-centric care under your own brand while improving efficiency and scalability.";
  const color = "#3E83EA";

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

export default MedX8;

const data = [
  {
    id: 1,
    header: "100% Customizable",
    body: "Tailor every aspect of the MedX platform — from interface design to feature modules — to match your organization’s branding and workflow requirements.",
    image: Clock,
  },
  {
    id: 2,
    header: "Full Source Code Ownership",
    body: "Gain complete control over your platform’s source code, ensuring long-term independence, flexibility, and the ability to enhance functionality as your business evolves.",
    image: Code,
  },
  {
    id: 3,
    header: "Built for Scalability",
    body: "Whether you manage a single clinic or a multi-branch hospital network, MedX grows with you — supporting unlimited users, patients, and integrations effortlessly.",
    image: Clock,
  },
];
