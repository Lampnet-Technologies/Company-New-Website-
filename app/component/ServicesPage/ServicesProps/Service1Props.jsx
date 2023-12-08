"use client";
import React, { useEffect } from "react";
import classes from "./Service1Props.module.css";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service1Props = (props) => {
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
    <div className={classes.Service1main}>
      <div className={`container ${classes.Service1Parent}`} ref={ref}>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          className={classes.Service1ParentDiv}
        >
          <motion.h1
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
          >
            {splitTextIntoWords(props.header).map((word, index) => (
              <motion.span
                key={index}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
          {/* <h1>{props.header} </h1> */}
        </motion.div>
        {/* <div className={classes.Service1ParentImgWeb}> */}
        <motion.div
          className={classes.Service1ParentImgWeb}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.5 }} // Add a delay for the image to start after text
        >
          <Image src={props.AboutImage} alt="" quality={100} width={300} />
        </motion.div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Service1Props;
