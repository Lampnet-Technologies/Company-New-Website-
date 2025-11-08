import React from "react";
import Service3Props from "../../ServicesPage/ServicesProps/Service3Props";
import Clock from "../../../../public/images/OrderXCircle.svg";
import Code from "../../../../public/images/OrderXCode.svg";

const VoiceX8 = () => {
  const heading = "Why Choose VoiceX AI?";
  const mail = "Win Against The Competition ";
  const paragraph1 =
    "Our artificial intelligence text-to-speech platform is designed to be fully customizable, allowing you to tailor the experience to meet your specific needs. Whether you're looking to create a unique voice for your brand or need specific features to enhance your workflow, VoiceX has you covered.";
  const color = "#F76C6C";
  return (
    <div>
      {" "}
      <Service3Props
        data={data}
        props={heading}
        mail={mail}
        paragraph1={paragraph1}
        textColor={color}
      />{" "}
    </div>
  );
};

export default VoiceX8;
const data = [
  {
    id: 1,
    header: "100% Customization",
    body: "Our text-to-speech platform is designed to be fully customizable, allowing you to tailor the experience to meet your specific needs. Whether you're looking to create a unique voice for your brand or need specific features to enhance your workflow, VoiceX has you covered.",
    image: Clock,
  },
  {
    id: 2,
    header: "Source Code Ownership",
    body: "With VoiceX, you own the source code, giving you complete control over your text-to-speech solution and the ability to customize it as needed.",
    image: Code,
  },
  {
    id: 3,
    header: "Scalability and Growth",
    body: "VoiceX is built to scale with your business, ensuring that as your needs grow, our platform can adapt to meet them without compromising performance or quality.",
    image: Clock,
  },
];
