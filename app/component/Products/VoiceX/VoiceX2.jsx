import React from "react";
import Features1 from "../../../../public/images/OrderXA.svg";
import Features2 from "../../../../public/images/OrderXB.svg";
import Features3 from "../../../../public/images/OrderXC.svg";
import Product2 from "../ProductProps/Product2";

const VoiceX2 = () => {
  const header = "Word-Class Features";
  const subHeader = "Core  Functionality – Everything You Need";
  const paragraph =
    "Approved by many regulators, flexible and customizable, API-based, cloud-hosted or on-premise-installed, available in SaaS or perpetual license model, opportunity to purchase source codes.";
  const color = "#F76C6C";

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

export default VoiceX2;

const data = [
  {
    id: 1,
    body: "Our voice AI responds to emotional cues in text and adapts its delivery to suit both the immediate content and the wider context",
    name: "Contextually Aware AI",
    image: Features1,
  },
  {
    id: 2,
    body: "We prioritize security in our AI development and integration services, ensuring that your business data is protected from unauthorized access",
    name: "Activity History",
    image: Features2,
  },
  {
    id: 3,
    body: "Develop fully customizable & white label AI voice agents. Integrate with any app, deploy across any server, and retain full control over data, code, and experience",
    name: "Label Generations",
    image: Features3,
  },
  {
    id: 4,
    body: "We are committed to continuous improvement to ensure that we provide cutting-edge AI solutions to our clients.",
    name: "Emmanuel Bamidele",
    image: Features1,
  },
];
