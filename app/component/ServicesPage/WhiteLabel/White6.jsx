import React from "react";
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";
const White6 = () => {
  const header = "The Benefits";
  const subHeader =
    "Why Choose LampNets Solutions for your White Label App Customization";
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

export default White6;

const data = [
  {
    id: 1,
    body: "We help your business design and develop a custom mobile app that aligns with your brand identity, helping you to establish a stronger brand presence",
    name: "Branding",
    image: Clock,
  },
  {
    id: 2,
    body: "Our flexible licensing options allow you to customize the app to your business needs and provides a unique competitive advantage in your industry..",
    name: "Cost-Effective",
    image: Clock,
  },
  {
    id: 3,
    body: "Our team of experts can help you bring your app ideas to life quickly, reducing the time it takes for your business to launch a mobile app in the market.",
    name: "Faster Time-to-Market",
    image: Clock,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
    name: "Chris Alex",
    image: Clock,
  },
];
