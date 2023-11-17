import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

import React from "react";

const Api3 = () => {
  const heading = "Our API Development & Integration Services Includes";
  return (
    <div>
      <Service3Props data={data} props={heading} />
    </div>
  ); 
};

export default Api3;
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
    image: Clock,
  },
  {
    id: 3,
    header: "Cloud API Integration",
    body: "We provide secure API development, analysis, operation, and scalability, with on-premises, cloud, or hybrid on-premises/SaaS API management.",
  },
  {
    id: 4,
    header: "Microservice Architecture",
    body: "We provide technical support and troubleshooting services to ensure optimal functioning of cloud resources, with timely resolution of any issue. ",
    image: Clock,
  },
  {
    id: 5,
    header: "Need Secured Cloud Services?",
    body: "Our Cloud & DevOps engineers will work with you to fine-tune the delivery, deployment and support of a high-quality software.",
    button: "Discuss your idea",
  },
  {
    id: 6,
    header: "Automated API Testing",
    body: "Our engineers and QA specialists use automated testing to evaluate performance and functionality of crucial business apps.",
    image: Clock,
  },
];
