import React from "react";
import Service2Props from "../ServicesProps/Service2Props";

const White2 = () => {
  const header = "White Label App Customization";

  const subheader =
    "We build Customizable Business Apps that Promote Brand Visibility and Credibility";
  const paragraph =
    "White label apps are software applications developed by one company and rebranded and marketed by another company under their brand name. These apps allow businesses to offer customized solutions to their customers without investing in costly development and infrastructure.";

  const paragraph2 =
    "At Lampnets Solutions, we offer white label app development services to help businesses create custom mobile apps that align with their brand and requirements. Our experts provide ideation, design, development, testing, and maintenance support. We offer flexible licensing options to fit your needs and budget, delivering a seamless user experience that enhances your brand identity.";
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

export default White2;
