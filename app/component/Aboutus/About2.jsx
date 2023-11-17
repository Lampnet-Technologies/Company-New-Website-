import React from "react";
import classes from "./About2.module.css";

const About2 = () => {
  return (
    <div className= {`container ${classes.About2Main}`}>
      <div className= {classes.About2Parent}>
        <h6>Who we are</h6>
        <h2>
          We Craft Exceptional Experiences with our Brand, Design, and Digital
          Expertise
        </h2>
      </div>
      <div className= {classes.About2Child}>
        <p>
          LampNet is a team of innovative and world-class professionals
          relentlessly obsessed with the consistent delivery of trail-blazing
          solutions that guarantee your optimum productivity. We provide
          customized solutions that drive growth, efficiency, and success, and
          offer comprehensive support services to simplify technology adoption
          and utilization, ensuring user-friendliness, security, and
          scalability.
        </p>
      </div>
    </div>
  );
};

export default About2;
