import React from "react";
import HomePage1 from "./HomePage1";
import HomePage2 from "./HomePage2";
import HomePage3 from "./HomePage3";
import HomePage4 from "./HomePage4";
import HomePage5 from "./HomePage5";
import HomePage6 from "./HomePage6";
import HomePage7 from "./HomePage7";
import HomePage9 from "./HomePage9";
import HomePage10 from "./HomePage10";
import HomePage11 from "./HomePage11";
import HomeWrapper from "./HomeWrapper";
import Marousel from "../Carousel/Marousel";
import Accordionpage from "../Accordion/page";
import HomeBlog from "./HomeBlog/page";

const Index = () => {
  return (
    <div>
      <HomePage1 />
      <HomePage2 />
      <HomePage10 />
      {/* <HomePage11 /> */}
      <HomeWrapper />
      <Accordionpage />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
      <HomePage6 />
      <HomePage7 />
      <Marousel />
      <HomePage9 />
      <HomeBlog />
    </div>
  );
};

export default Index;
