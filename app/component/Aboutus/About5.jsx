"use client";
import React from "react";
import classes from "./About5.module.css";
import Image from "next/image";
import About5image from "../../../public/images/About5image.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About5 = () => {
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
    <div className={`container ${classes.About5Main}`} ref={ref}>
      {inView && (
        <div className={classes.About5Parent}>
          <div className={classes.About5ImageB}>
            <Image src={About5image} alt="" quality={100} width={500} />
          </div>
          <div className={classes.About5Child}>
            <h6>Our Vision</h6>
            <motion.h2
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
            >
              {splitTextIntoWords(
                "We believe in Empowering African Businesses with World-Class Technology Solutions"
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
            {/* <h2>
              We are a one-stop technology solution provider for startups and
              businesses{" "}
            </h2> */}
            <p>
              At Lampnet Solutions, our vision is to become the leading digital
              transformation partner for businesses globally. We are committed
              to empowering organizations across the world with cutting-edge
              technology solutions that drive growth and success. Our goal is to
              be democratize access to digital business transformation through
              technology advancement and affordability.{" "}
            </p>
          </div>

          <div className={classes.About5ImageA}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
              transition={animationOptions}
              className={classes.About4Image}
            >
              <Image
                src={About5image}
                alt=""
                quality={100}
                width={500}
                // placeholder="blur"
                // blurDataURL=""
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About5;
