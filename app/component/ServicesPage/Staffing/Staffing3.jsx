import React from 'react'
import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

const Staffing3 = () => {
    const heading = "Our IT Staff Outsourcing & Team Augmentation Services Includes";
  return (
    <div>
        <Service3Props data={data} props={heading} />
    </div>
  )
}

export default Staffing3;

const data = [
    {
      id: 1,
      header: "Hire UI",
      body: "Outsource IT staff to us for access to skilled professionals without the cost of permanent hires. We handle recruitment, training, and HR management.",
      image: Clock,
    },
    {
      id: 2,
      header: "Team Augmentation",
      body: "We augment your team with our IT experts who will work seamlessly to help you scale your business faster without permanent hires.",
      image: Clock,
    },
    {
      id: 3,
      header: "Project-based Outsourcing",
      body: "We handle entire IT projects for your business, providing customized solutions that meet your business goals, help you reduce costs and increase efficiency.",
      image: Clock,
    },
    {
      id: 4,
      header: "Remote Staffing",
      body: "We provide access to skilled IT professionals who work remotely from our location to anywhere while saving on overhead costs.",
      image: Clock,
    },
    {
      id: 5,
      header: "Need a Dedicated De ?",
      body: "Our Cloud & DevOps engineers will work with you to fine-tune the delivery, deployment and support of a high-quality software.",
      button: "Discuss your idea",
    },
    {
      id: 6,
      header: "Network Outsourcing",
      body: "We provide managed network services to ensure secure, reliable, and efficient network. Our team reduces downtime and improves network performance.",
      image: Clock,
    },
  ];
  