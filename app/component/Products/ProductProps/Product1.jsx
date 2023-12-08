"use client";
import React, { useEffect } from "react";
import classes from "./Product1.module.css";
import Image from "next/image";
import MyButton from "../../Button/Button";
import ButtonThree from "../../Button/ButtonThree";
import ButtonTwo from "../../Button/ButtonTwo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product1 = ({
  backgroundColor,
  textColor,
  border,
  colorbutton,
  header,
  subheader,
  paragraph,
  initial,
  initial2,
  image,
}) => {
  const h6Style = {
    color: textColor, // Set the color dynamically based on the prop
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px",
  };
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
    <div className={`container ${classes.Product1Main}`}>
      <div className={classes.Product1ChildMobile}>
        <Image src={image} alt="" quality={100} width={500} />
      </div>
      <div className={classes.Product1Parent} ref={ref}>
        {/* <h6 style={h6Style}>{header} </h6>
        <h2>{subheader}</h2>
        <p>{paragraph}</p> */}

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
        >
          <motion.h6
            style={h6Style}
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
          >
            {splitTextIntoWords(header).map((word, index) => (
              <motion.span
                key={index}
                // style={{ display: "inline-block" }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }} // Adjust the delay as needed
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h6>
          <motion.h2
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
          >
            {splitTextIntoWords(subheader).map((word, index) => (
              <motion.span
                key={index}
                // style={{ display: "inline-block" }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
          >
            {splitTextIntoWords(paragraph).map((word, index) => (
              <motion.span
                key={index}
                // style={{ display: "inline-block" }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        <div className={classes.ProductButton}>
          <div className={classes.ProductButton1}>
            <MyButton text={initial} backgroundColor={backgroundColor} />
          </div>
          <div className={classes.ProductButton2}>
            <ButtonThree text={initial2} color={colorbutton} border={border} />
          </div>
        </div>
      </div>

      {/* <div className={classes.Product1Child}> */}
      <motion.div
        className={classes.Product1Child}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5 }} // Add a delay for the image to start after text
      >
        <Image src={image} alt="" quality={100} width={500} />
      </motion.div>
      {/* </div> */}
    </div>
  );
};

export default Product1;
