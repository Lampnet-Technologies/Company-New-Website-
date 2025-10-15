import React from "react";
import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

const White3 = () => {
  const heading = "Our White Label App Customization Services Include";
  return (
    <div>
      <Service3Props data={data} props={heading} />
    </div>
  );
};

export default White3;

const data = [
  {
    id: 1,
    header: "App Rebranding & UI Customization",
    body: "We tailor your white-label app’s interface, color palette, and visuals to align perfectly with your brand identity, ensuring a cohesive user experience across all touchpoints.",
    image: Clock,
  },
  {
    id: 2,
    header: "Feature Enhancement & Module Integration",
    body: "Extend functionality with custom modules, API integrations, and additional features that align with your unique business goals and user requirements.",
    image: Clock,
  },
  {
    id: 3,
    header: "Multi-Platform Deployment",
    body: "We adapt and optimize your app for seamless performance across iOS, Android, and web platforms—ensuring maximum reach and engagement.",
    image: Clock,
  },
  {
    id: 4,
    header: "Performance Optimization & Security",
    body: "We enhance your app’s speed, scalability, and data security through rigorous performance testing and advanced encryption protocols.",
    image: Clock,
  },
  {
    id: 5,
    header: "Dedicated Support & Maintenance",
    body: "Our team provides continuous post-launch support, updates, and improvements to keep your app running efficiently and aligned with evolving user expectations.",
    button: "Discuss Your Project",
  },
  {
    id: 6,
    header: "App Store Setup & Launch Assistance",
    body: "We handle all aspects of publishing, compliance, and optimization for App Store and Play Store deployment, ensuring a smooth and professional launch.",
    image: Clock,
  },
];
