"use client";
import React, { useEffect } from "react";
import classes from "./Service2Props.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service2Props = (props) => {
  const controls = useAnimation();
  const imageControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      imageControls.start("visible");
    }
  }, [controls, inView, imageControls]);

  const splitTextIntoWords = (text) => {
    return text.split(" ");
  };
  return (
    <div className={`container ${classes.Service2GrandMain}`} ref={ref}>
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        className={classes.Service2Main}
      >
        <h6>{props.header} </h6>
        <motion.h2
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
        >
          {splitTextIntoWords(props.subheader).map((word, index) => (
            <motion.span
              key={index}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              // transition={{ delay: index * 0.1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h2>
        <p>{props.paragraph}</p>
        <p> {props.paragraph2}</p>
      </motion.div>
    </div>
  );
};

export default Service2Props;
