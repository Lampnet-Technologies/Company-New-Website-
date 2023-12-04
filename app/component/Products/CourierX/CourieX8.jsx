import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/ProductClock.svg";
import Code from "../../../../public/images/Code.svg";

const CourieX8 = () => {
  const heading = "White-Label Software for Your Needs";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Expand Your On-demand Delivery Business with the Influence of our ready-to-use 100% Customizable Software Solution for profitable results in your Company ";
  return (
    <div>
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
      />
    </div>
  );
};

export default CourieX8;
const data = [
  {
    id: 1,
    header: "Custom API Development",
    body: "We develop custom APIs that securely extend application functionality, using clean code, top development tools, and achieving high performance.",
    image: Clock,
  },
  {
    id: 2,
    header: "Third Party API Integration ",
    body: "We use Microsoft platforms like Azure for web functionality, system integration, REST API creation, documentation, and seamless integration with existing apps..",
    image: Code,
  },
  {
    id: 3,
    header: "Cloud API Integration",
    body: "We provide secure API development, analysis, operation, and scalability, with on-premises, cloud, or hybrid on-premises/SaaS API management.",
    image: Clock,
  },
];
