import React from "react";
import Features1 from "../../../../public/images/ThriftXA.svg";
import Features2 from "../../../../public/images/ThriftXB.svg";
import Features3 from "../../../../public/images/ThriftXC.svg";
import Product2 from "../ProductProps/Product2";

const ThriftX2 = () => {
  const header = "World-Class Features";
  const subHeader = "Core Banking Functionality – Everything You Need";
  const paragraph =
    "ThriftX is fully approved by leading regulators and built for flexibility and customization. API-based, cloud-hosted or on-premise, and available in SaaS or perpetual license models, with the option to acquire source code for full control.";
  const color = "#E47E1F";

  return (
    <div>
      <Product2
        header={header}
        subHeader={subHeader}
        paragraph={paragraph}
        data={data}
        textColor={color}
      />
    </div>
  );
};

export default ThriftX2;

const data = [
  {
    id: 1,
    body: "Seamlessly integrate your systems, including third-party applications, databases, and software, through our robust API services.",
    name: "Analytics",
    image: Features1,
  },
  {
    id: 2,
    body: "Security is our priority. We ensure your business data is protected from unauthorized access through secure API development and integration.",
    name: "Automated Workflows",
    image: Features2,
  },
  {
    id: 3,
    body: "Optimize performance and functionality with scalable APIs that save time, automate tasks, and streamline your workflows.",
    name: "Scalability",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous innovation, delivering cutting-edge solutions to keep your business ahead in the digital banking space.",
    name: "Innovation",
    image: Features1,
  },
];
