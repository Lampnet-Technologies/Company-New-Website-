import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";

const Ui6 = () => {
  const header = "The Benefits";
  const subHeader = "Why Choose LampNets Solutions for Your UI/UX Design";
  const paragraph =
    "At LampNets, we craft visually stunning and user-centered designs that combine creativity with functionality. Our goal is to help you deliver exceptional digital experiences that engage, convert, and delight users.";

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
    body: "We design intuitive, user-friendly interfaces tailored to your business goals and audience for maximum usability and satisfaction.",
    name: "Enhanced User Experience",
    image: Clock,
  },
  {
    id: 2,
    body: "Our designs foster trust and loyalty by delivering consistent, seamless experiences that keep customers returning to your brand.",
    name: "Increased Customer Loyalty",
    image: Clock,
  },
  {
    id: 3,
    body: "By prioritizing usability and visual appeal, we help reduce user frustration, increase engagement, and maximize your ROI.",
    name: "Higher ROI and Engagement",
    image: Clock,
  },
  {
    id: 4,
    body: "We continuously refine our design strategies to stay ahead of trends, ensuring your digital products remain fresh, relevant, and impactful.",
    name: "Continuous Innovation",
    image: Clock,
  },
];
