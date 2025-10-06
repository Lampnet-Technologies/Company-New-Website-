import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

import React from "react";

const Ai3 = () => {
  const heading = "Our AI Development & Integration Services Includes";
  return (
    <div>
      <Service3Props data={data} props={heading} />
    </div>
  ); 
};

export default Ai3;
const data = [
  {
    id: 1,
    header: "DocVantage",
    body: "Reinvent document operations with intelligent classification, 99.2% extraction accuracy, and compliance‑ready audit trails. Document Intelligence Platform involves Classification & routing, Automated data extraction (99.2%+), Workflow triggers, and Audit trails & compliance",
    image: Clock,
  },
  {
    id: 2,
    header: "MedVantage",
    body: "We use Intelligent records management with categorization, compliance monitoring, and secure integrations. Healthcare Records AI Records categorization & search, Compliance monitoring & alerts, HIPAA‑ready handling, and EHR/CRM integrations",
    image: Clock,
  },
  {
    id: 3,
    header: "Vechtron AI",
    body: "We provide secure Intelligent vehicle management with categorization, compliance monitoring, and secure integrations. Our AI Powered Vehicle Assistant involves Digital Manual, Autonomous Vehicle Maintenance, Vehicle Health Monitoring, and Driver Behavior Analysis.",
  },
  {
    id: 4,
    header: "AI Powered ChatBot",
    body: "We provide technical support and troubleshooting services to ensure optimal functioning of your resources, with timely resolution of any issue. ",
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
    header: "Automated AI Testing",
    body: "Our engineers and QA specialists use automated testing to evaluate performance and functionality of crucial business apps.",
    image: Clock,
  },
];
