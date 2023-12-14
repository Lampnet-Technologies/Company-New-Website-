"use client";
import React, { useRef, useEffect, useState } from "react";
import MyButton from "../../Button/Button";
import Image from "next/image";
import classes from "./Product11.module.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product11 = ({
  image,
  subheader,
  header,
  body,
  backgroundColor,
  border,
  initial,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={`container ${classes.Product11Main}`}
      ref={ref}
      initial={{ opacity: 0, x: -50 }} // Initial state (invisible and shifted left)
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 3 }}
    >
      {/* <div className={`container ${classes.Product11Main}`}> */}
      <div className={` ${classes.Product11ChildMobile}`}>
        <Image src={image} alt="" quality={100} />
      </div>
      <div className={` ${classes.Product11Parent}`}>
        <h2> {subheader} </h2>
        <h6>{header} </h6>
        <p> {body} </p>
        <div className={classes.Product11Button}>
          <MyButton
            text={initial}
            backgroundColor={backgroundColor}
            border={border}
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
        </div>
      </div>
      <div className={` ${classes.Product11Child}`}>
        <Image src={image} alt="" quality={100} />
      </div>{" "}
      {/* </div> */}
    </motion.div>
  );
};

export default Product11;
