"use client";
import React from "react";
import classes from "./About2.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About2 = () => {
  const parentAnimation = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const childAnimation = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  const animationOptions = {
    duration: 0.5, // Adjust the duration to control the speed (in seconds)
  };
  const [parentRef, parentInView] = useInView({
    triggerOnce: true,
  });

  const [childRef, childInView] = useInView({
    triggerOnce: true,
  });
  return (
    <div className={`container ${classes.About2Main}`}>
      <motion.div
        ref={parentRef}
        initial="hidden"
        animate={parentInView ? "visible" : "hidden"}
        variants={parentAnimation}
        transition={animationOptions}
        className={classes.About2Parent}
      >
        <h6>Who we are</h6>
        <h2>
          We Craft Exceptional Experiences with our Brand, Design, and Digital
          Expertise
        </h2>
      </motion.div>
      <motion.div
        ref={childRef}
        initial="hidden"
        animate={childInView ? "visible" : "hidden"}
        variants={childAnimation}
        transition={animationOptions}
        className={classes.About2Child}
      >
        <p>
          LampNet is a team of innovative and world-class professionals
          relentlessly obsessed with the consistent delivery of trail-blazing
          solutions that guarantee your optimum productivity. We provide
          customized solutions that drive growth, efficiency, and success, and
          offer comprehensive support services to simplify technology adoption
          and utilization, ensuring user-friendliness, security, and
          scalability.
        </p>
      </motion.div>
    </div>
    // <div className={`container ${classes.About2Main}`}>
    //   <div className={classes.About2Parent}>
    //     <h6>Who we are</h6>
    //     <h2>
    //       We Craft Exceptional Experiences with our Brand, Design, and Digital
    //       Expertise
    //     </h2>
    //   </div>
    //   <div className={classes.About2Child}>
    //     <p>
    //       LampNet is a team of innovative and world-class professionals
    //       relentlessly obsessed with the consistent delivery of trail-blazing
    //       solutions that guarantee your optimum productivity. We provide
    //       customized solutions that drive growth, efficiency, and success, and
    //       offer comprehensive support services to simplify technology adoption
    //       and utilization, ensuring user-friendliness, security, and
    //       scalability.
    //     </p>
    //   </div>
    // </div>
  );
};

export default About2;
