import React from "react";
import Service2Props from "../ServicesProps/Service2Props";

const Training2 = () => {
  const header = "Training & IT Consulting";

  const subheader =
    "We Empower Organizations to to achieve their full potential through expert training and tailored consultancy solutions";
  const paragraph =
    "Training & IT Consulting is a service that provides businesses with expert guidance and support on all aspects of IT. This service helps businesses to optimize their IT systems, increase efficiency, and reduce costs. At Lampnets Solutions, we offer Training & IT Consulting services to businesses of all sizes and industries.";

  const paragraph2 =
    "Our team of IT experts works with your business to evaluate your current IT systems and identify areas for improvement. We provide customized training and certification programs to help your team acquire the skills and knowledge they need to maximize the benefits of your IT systems. With our Training & IT Consulting services, your business can stay ahead of the curve with the latest IT technologies and trends. ";
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

export default Training2;
