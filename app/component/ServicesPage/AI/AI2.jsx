import React from "react";
import Service2Props from "../ServicesProps/Service2Props";

const Ai2 = () => {
  const header = "Artificial Intelligence Development";

  const subheader =
    "Seamlessly Connect and Enhance Your Systems with Intelligent Integration";

  const paragraph =
    "Artificial Intelligence (AI) empowers systems to think, learn, and adapt — enabling smarter decision-making and efficient automation across your organization.";

  const paragraph2 =
    "At LampNets Solutions, we provide end-to-end AI development and integration services designed to optimize your business processes and accelerate innovation. Our team of experts builds tailored AI solutions that align with your goals — whether it’s connecting with third-party systems, automating repetitive tasks, or elevating customer experiences through intelligent insights.";
  return (
    <div>
      <Service2Props
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        paragraph2={paragraph2}
      />
    </div>
  );
};

export default Ai2;
