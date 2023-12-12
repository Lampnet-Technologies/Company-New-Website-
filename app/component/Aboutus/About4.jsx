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
            <h6>About us</h6>
            <motion.h2
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
            >
              {splitTextIntoWords(
                "We are a one-stop technology solution provider for startups and businesses"
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
              LampNet Solutions is a remote-based agile IT Consulting & Mobile
              Technology Development company in West Africa, who are service
              providers of world-class solutions and mobile technologies for
              high business growth and transformation with vast experience in
              Mobile Application Development, Enterprise solutions, Security and
              Cloud based technologies.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About4;
