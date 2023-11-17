import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/AboutMedX.svg";
import Circle from "../../../../public/images/Circle.svg";

const MedX4 = () => {
  const title = "Capture all interactions and know your patients inside out";
  const tag1 = "Detailed Info";
  const taga =
    "Get a complete view of every patient’s contact details, social media profile, the doctor assigned, and medical bills";
  const tag2 = "Cloud-Based";
  const tagb =
    "Stay up-to-date with your organization’s activities with real-time information that can be accessed anywhere.";
  const tag3 = "Increased Productivity";
  const tagc = "Save time with efficient patient & study management features.";
  const header = "About MedX";
  const subheader = "Leverage new possibilities with MedX";
  const body =
    "LampNets Solutions strives to provide top-tier IT solutions to businesses of all sizes and locations from industry experts";
  const initial = "Download Now";
  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        taga={taga}
        tag2={tag2}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        img={Realtime}
        Circle={Circle}
        initial={initial}
      />
    </div>
  );
};

export default MedX4;
