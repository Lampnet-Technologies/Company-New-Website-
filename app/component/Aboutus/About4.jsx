"use client";
import React from "react";
import classes from "./About4.module.css";
import About4image from "../../../public/images/About4image.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About4 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const imageAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const animationOptions = {
    duration: 0.5,
  };

  const splitTextIntoWords = (text) => {
    return text.split(" ");
  };
  return (
    <div ref={ref} className={`container ${classes.About4Main}`}>
      {inView && (
        <div className={classes.About4Parent}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageAnimation}
            transition={animationOptions}
            className={classes.About4Image}
          >
            <Image src={About4image} alt="" quality={100} width={500} />
          </motion.div>

          <div className={classes.About4Child}>
            <h6>Our Mission</h6>
            <motion.h2
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
            >
              {splitTextIntoWords(
                "We Prioritize Exceptional Customer Service and Long-lasting Partnership"
              ).map((word, index) => (
                <motion.span
                  key={index}
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h2>
            <p>
              As a progressive and pioneering company, we prioritize our people
              above all else. Our culture is defined by diversity, inclusion,
              and an unwavering commitment to continuous learning and growth. We
              offer comprehensive support services to simplify technology
              adoption and utilization, ensuring usability, security,
              scalability and deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About4;
