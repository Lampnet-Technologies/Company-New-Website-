import React from "react";
import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

const Cloud3 = () => {
  const heading = "Our Cloud Solutions & Management Services Includes";
  return (
    <div>
      <Service3Props data={data} props={heading} />
    </div>
  );
};

export default Cloud3;

const data = [
  {
    id: 1,
    header: "Cloud Mangement",
    body: "We implement security measures to protect cloud resources from cyber threats, such as malware, hacking attempts, and data breaches.",
    image: Clock,
  },
  {
    id: 2,
    header: "Managed Security",
    body: "We implement security measures to protect cloud resources from cyber threats, such as malware, hacking attempts, and data breaches.",
    image: Clock,
  },
  {
    id: 3,
    header: "Managed DevOps",
    body: "We integrate development and operations processes, to enable a faster and more efficient software delivery in the cloud environment.",
    image: Clock,
  },
  {
    id: 4,
    header: "Managed Support",
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
    header: "Cloud Computing",
    body: "We provide on-demand access to computing resources, such as servers, storage, and databases, as well as software and applications.",
    image: Clock,
  },
];
