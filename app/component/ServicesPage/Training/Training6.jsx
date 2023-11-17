import React from 'react'
import Service6Props from "../ServicesProps/Service6Props";
import Clock from "../../../../public/images/Clock.svg";


const Training6 = () => {
    const header = "The Benefits";
    const subHeader =
      "Why Choose LampNets Solutions for your Training & IT Consulting";
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
  )
}

export default Training6

const data = [
    {
      id: 1,
      body: "We optimize your IT systems and processes for better productivity and  implement solutions tailored to your specific needs",
      name: "Improved IT Infrastructure",
      image: Clock,
    },
    {
      id: 2,
      body: "We align our IT services with your business goals to improve efficiency and increase profitability, and  maximize business potential.",
      name: "Increased Business Performance",
      image: Clock,
    },
    {
      id: 3,
      body: "Our team of business experts help your business stay ahead of the curve and remain competitive in a rapidly-changing marketplace.",
      name: "Competitive Advantage",
      image: Clock,
    },
    {
      id: 4,
      body: "We are committed to continuous improvement to ensure that we provide cutting-edge solutions provide cutting-edge solutions.",
      name: "Chris Alex",
      image: Clock,
    },
  ];
  