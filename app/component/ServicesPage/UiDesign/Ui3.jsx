import React from "react";
import Service3Props from "../ServicesProps/Service3Props";
import Clock from "../../../../public/images/Clock.svg";

const Ui3 = () => {
  const heading = "Our UI/UX Design Services Includes";
  return (
    <div>
      <Service3Props data={data} props={heading} />
    </div>
  );
};

export default Ui3;

const data = [
  {
    id: 1,
    header: "UI/UX Consulting",
    body: " We analyze your interface and provide recommendations to enhance your user experience, improve usability and user satisfaction.",
    image: Clock,
  },
  {
    id: 2,
    header: "Website Design",
    body: "We create responsive and visually appealing designs that are tailored to your business needs to attract and retain more customers to ultimately",
    image: Clock,
  },
  {
    id: 3,
    header: "Mobile Design",
    body: "We create user-friendly and intuitive mobile applications optimized for mobile devices to help you reach a wider audience and engage your customers.",
    image: Clock,
  },
  {
    id: 4,
    header: "Branding",
    body: "We create a memorable brand identity for your business to help your business establish a strong brand that resonates with your target audience. ",
    image: Clock,
  },
  {
    id: 5,
    header: "Need UI/UX Design Services?",
    body: "Our Cloud & DevOps engineers will work with you to fine-tune the delivery, deployment and support of a high-quality software.",
    button: "Discuss your idea",
  },
  {
    id: 6,
    header: "Design Workshop",
    body: "Our design workshops enhance your team's design skills with training on UI/UX principles, design thinking, agile methodology and strategy. ",
    image: Clock,
  },
];
