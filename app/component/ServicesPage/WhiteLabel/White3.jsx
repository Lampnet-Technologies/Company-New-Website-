import React from 'react'
import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

const White3 = () => {
    const heading = "Our Training & IT Consulting Services Includes";
  return (
    <div>
          <Service3Props data={data} props={heading} />
    </div>
  )
}

export default White3

const data = [
    {
      id: 1,
      header: "Training & Certification",
      body: "We offer a wide range of training courses, including technical skills training, leadership training, and certification programs.",
      image: Clock,
    },
    {
      id: 2,
      header: "IT System Evaluation",
      body: "We conduct a thorough assessment of your current IT system to identify any vulnerabilities or inefficiencies and give recommendations for improvement.",
      image: Clock,
    },
    {
      id: 3,
      header: "Project Management",
      body: "Our IT project management team uses agile methodologies, collaboration, and feedback for successful project execution across industries.",
      image: Clock,
    },
    {
      id: 4,
      header: "Data Strategy",
      body: "We build resilient architecture for interconnected applications and proactively manage IT security across your business ecosystem.",
      image: Clock,
    },
    {
      id: 5,
      header: "Need Training & IT Consulting?",
      body: "Our Cloud & DevOps engineers will work with you to fine-tune the delivery, deployment and support of a high-quality software.",
      button: "Discuss your idea",
    },
    {
      id: 6,
      header: "Business Intelligence",
      body: "Our BI consultants optimize data visualization and analytics with PowerBI. We use fact-based management and predictive modeling to drive decisions",
      image: Clock,
    },
  ];
  