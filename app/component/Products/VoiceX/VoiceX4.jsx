import React from "react";
import Product4 from "../ProductProps/Product4";
import Realtime from "../../../../public/images/OrderXRealTime.svg";
import Circle from "../../../../public/images/Circle.svg";
import Portfolio1 from "../../../../public/images/OderTime1.svg";
import Portfolio2 from "../../../../public/images/OderTime2.svg";

const VoiceX4 = () => {
  const title = "Clear and Natural Voice Output";
  const tag1 = "Multi-language Support";
  const taga =
    "Generate speech in multiple global and local languages with precise accents and tone control.";
  const tag2 = "Emotion & Tone Adjustment";
  const tagb =
    "Customize emotion, pacing, and emphasis to match your brand voice or user experience.";
  const tag3 = "High-Quality Audio Streaming";
  const tagc =
    "Deliver crisp and realistic voice output for real-time or pre-recorded applications.";
  const header = "About VoiceX";
  const subheader = "Turn Text Into Lifelike Speech Instantly";
  const body =
    "VoiceX makes text-to-speech more human. Designed for developers, educators, media creators, and businesses—our platform turns any text into clear, expressive, and natural voice output across devices.";
  const initial = "Get Started";
  const color = "#F76C6C";
  const backgroundColor = "#F76C6C";
  const border = "0px solid #F76C6C";

  return (
    <div>
      <Product4
        header={header}
        subheader={subheader}
        body={body}
        title={title}
        tag1={tag1}
        taga={taga}
        data={data}
        tag2={tag2}
        tagb={tagb}
        tag3={tag3}
        tagc={tagc}
        img={Realtime}
        Circle={Circle}
        initial={initial}
        textColor={color}
        backgroundColor={backgroundColor}
        border={border}
      />
    </div>
  );
};

export default VoiceX4;

const data = [
  {
    id: 1,
    title: "Real-Time Speech Generation",
    tag1: "Instant Voice Playback",
    taga: "Convert written text into lifelike speech instantly for live interactions, customer support, or accessibility tools.",
    tag2: "AI Voice Personalization",
    tagb: "Adjust tone, pitch, and personality to create voices that reflect your brand identity or user preference.",
    tag3: "Seamless Integration",
    tagc: "Easily integrate VoiceX with apps, websites, or devices through robust APIs and SDKs.",
    image: Realtime,
    Circle: Circle,
  },
  {
    id: 2,
    title: "Advanced Speech Controls",
    tag1: "Voice Modulation",
    taga: "Control voice speed, mood, and clarity for podcasts, e-learning, or entertainment platforms.",
    tag2: "Real-Time Translation",
    tagb: "Automatically translate and vocalize text into multiple languages with localized pronunciation accuracy.",
    tag3: "Offline Mode",
    tagc: "Continue generating and playing audio even without an internet connection using cached voice models.",
    image: Portfolio1,
    Circle: Circle,
  },
  {
    id: 3,
    title: "Analytics & Insights",
    tag1: "Usage Reports",
    taga: "Monitor speech generation trends, performance metrics, and voice engagement data in real-time.",
    tag2: "Voice Quality Tracking",
    tagb: "Identify and improve output quality with AI-driven error detection and playback monitoring.",
    tag3: "Cloud Storage",
    tagc: "Securely store generated voice files and access them anytime with cloud-based management tools.",
    image: Portfolio2,
    Circle: Circle,
  },
];
