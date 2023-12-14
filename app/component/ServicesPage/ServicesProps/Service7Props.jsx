"use client";
import React, { useEffect, useState } from "react";
import classes from "./Service7Props.module.css";
import Image from "next/image";
import MyButton from "../../Button/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service7Props = (props) => {
  const dropAnimation = {
    y: 20, // Adjust the distance the image drops
    opacity: 1,
    transition: {
      type: "spring", // You can use other transition types like "tween", "easeInOut", etc.
      damping: 10,
      stiffness: 100,
    },
  };
  const bounceAnimation = {
    y: -20, // Adjust the bounce height
    transition: {
      type: "spring",
      damping: 5, // Adjust the damping for bounce effect
      stiffness: 100,
    },
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const splitTextIntoWords = (text) => {
    return text.split(" ");
  };
  return (
    <div ref={ref}>
      <div className={classes.Service7Main}>
        <div className={`container ${classes.Service7Parent}`}>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={dropAnimation}
                exit={{ opacity: 0 }}
                whileHover={bounceAnimation}
                className={classes.Service7Bro}
              >
                <Image src={props.Group} alt="" quality={100} width={400} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className={classes.Service7Child}>
            <h6>{props.header}</h6>
            <motion.h2
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              initial={{ opacity: 0, x: -20 }}
            >
              {splitTextIntoWords(props.subHeader).map((word, index) => (
                <motion.span
                  key={index}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h2>

            <p>{props.paragraph}</p>
            <MyButton
              text={props.initial}
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service7Props;
