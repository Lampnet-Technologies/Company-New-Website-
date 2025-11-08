"use client";
import React, { useState } from "react";
import Service2Props from "../ServicesProps/Service2Props";

const Service2 = () => {
  const [header, setHeader] = useState("Startup Scaleup & MVP Development");

  const [subheader, setSubHeader] = useState(
    " We Have a Proven Track Record of Enabling Startups to Grow with Our Market-Ready MVPs"
  );
  const [paragraph, setParagraph] = useState(
    "According to a study by Failory, over 70% of startups tend to fail within the first five years, around 42% fail due to misinformation on market demand while only 1% of startups become unicorn firms like    Uber, Airbnb, Slack, Stripe, and Docker."
  );
  const [paragraph2, setParagraph2] = useState(
    "A solid foundation for your Startup begins with a well-defined MVP. We specialize in designing prototypes and MVPs that address your unique business needs, incorporate exciting new features, and are easily adjusted to reflect market realities"
  );

  return (
    <div>
      <Service2Props
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        paragraph2= {paragraph2}
      />
    </div>
  );
};

export default Service2;
