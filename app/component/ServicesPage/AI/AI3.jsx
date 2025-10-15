import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

import React from "react";

const Ai3 = () => {
  const heading = "Our AI Development & Integration Services Include";

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
    body: "Reimagine document workflows with intelligent classification, 99.2% data extraction accuracy, and compliance-ready audit trails. DocVantage enables automated document routing, data extraction, workflow triggers, and end-to-end compliance monitoring.",
    image: Clock,
  },
  {
    id: 2,
    header: "MedVantage",
    body: "Transform healthcare record management with AI-driven categorization, compliance tracking, and secure integrations. MedVantage offers intelligent record search, real-time compliance alerts, HIPAA-ready data handling, and seamless EHR/CRM integration.",
    image: Clock,
  },
  {
    id: 3,
    header: "Vechtron AI",
    body: "Enhance vehicle management with AI-powered monitoring and predictive insights. Vechtron AI provides a digital manual assistant, autonomous maintenance scheduling, real-time vehicle health analysis, and driver behavior tracking for smarter fleet operations.",
    image: Clock,
  },
  {
    id: 4,
    header: "AI-Powered Chatbot",
    body: "Deliver exceptional customer support with our intelligent chatbot solutions. Our AI chatbots provide instant responses, technical assistance, and issue resolution to improve user satisfaction and reduce support overhead.",
    image: Clock,
  },
  {
    id: 5,
    header: "Secured Cloud Integration",
    body: "Partner with our Cloud & DevOps engineers to build secure, scalable infrastructure for your AI applications. We ensure optimized delivery, deployment, and ongoing support for high-performing systems.",
    button: "Discuss Your Idea",
  },
  {
    id: 6,
    header: "Automated AI Testing",
    body: "Ensure the reliability of your AI applications with automated testing frameworks. Our QA specialists evaluate performance, functionality, and scalability to maintain top-tier software quality.",
    image: Clock,
  },
];
