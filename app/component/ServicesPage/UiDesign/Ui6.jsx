import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Ui6 = () => {
  const header = "The Benefits";
  const subHeader = "Why Choose LampNet Solutions for your UI/UX Design";
  const paragraph =
    " We understand your idea is unique, and so should be your product, hence we combine our resouces to accelerate the growth of your startup from ideation to execution";

  return (
    <div>
      <Service6Props
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
      />
    </div>
  );
};

export default Ui6;

const data = [
  {
    id: 1,
    body: "We create user-friendly interfaces tailored to your business goals, target audience, and user needs for maximum satisfaction.",
    name: "Improved User Experience",
    image: Clock,
  },
  {
    id: 2,
    body: "We create Well-designed interfaces that lead to positive user experiences, customer loyalty, repeat business, and referrals.",
    name: "Increased CX Satisfaction",
    image: Clock,
  },
  {
    id: 3,
    body: "We create Well-designed interfaces that lead to positive user experiences, customer loyalty, repeat business, and referrals.",
    name: "Value for Money",
    image: Clock,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Clock,
  },
];
