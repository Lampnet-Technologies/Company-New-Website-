import React from "react";
import Product3 from "../ProductProps/Product3";
import Features3 from "../../../../public/images/OrderXC.svg";

const VoiceX3 = () => {
  const header = "Many Items, One Inventory Solution.";
  const subheader = "What you can do with VoiceX ";
  const paragraph =
    "Voice-X provides a vast collection of high-quality voices tailored for creators. Whether you’re producing audiobooks, videos, or interactive content, find the perfect voice to bring your vision to life.";
  const color = "#F76C6C";

  return (
    <div>
      <Product3
        data={data}
        header={header}
        subheader={subheader}
        paragraph={paragraph}
        textColor={color}
      />
    </div>
  );
};

export default VoiceX3;

const data = [
  {
    id: 1,
    image: Features3,
    title: "Gaming",
    body: "Our AI voices adapt to any character or setting, delivering natural speech in 32 languages that’s quick to implement and ready to scale with your game’s needs. Customize voices to fit unique personalities and make every character sound authentic",
  },
  {
    id: 2,
    image: Features3,
    title: "Audiobook",
    body: "Let your stories be heard as soon as they're published in a crisp, authentic, and unique voice. Use our AI toolkit to boost your reach and improve access to your content",
  },
  {
    id: 3,
    image: Features3,
    title: "Accessibility",
    body: "Our AI audio tools improve accessibility, supporting users with different visual, cognitive, or learning needs in accessing and interacting with the digital world",
  },
];
