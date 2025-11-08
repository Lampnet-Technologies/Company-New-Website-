import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/CoWorkerCircle.svg";
import Code from "../../../../public/images/CoWorkerCode.svg";

const CoWorkspaceX8 = () => {
  const heading = "Fully Customizable to Meet Your Workspace Needs";
  const mail = "Win Against the Competition";
  const paragraph1 =
    "Co-WorkspaceX is a white-label workspace management platform designed to fit your brand and business model. Configure modules, automate workflows, and personalize every detail to match your workspace identity.";
  const color = "#1628F4";

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

export default CoWorkspaceX8;

const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Easily tailor the platform to match your brand — from booking rules and pricing models to dashboards and user interfaces, ensuring a truly unique workspace experience.",
    image: Clock,
  },
  {
    id: 2,
    header: "Full Ownership & Integration",
    body: "Seamlessly integrate Co-WorkspaceX with your existing tools and systems. Maintain full control and ownership over your data and configurations for complete flexibility.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "Expand from one location to hundreds effortlessly. Co-WorkspaceX is built to grow with you — supporting new branches, teams, and features without disruption.",
    image: Clock,
  },
];
