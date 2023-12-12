"use client";
import React, { useEffect } from "react";
import classes from "./Product15.module.css";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product15 = (props) => {
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
      className={`container ${classes.Product15Main}`}
      ref={ref}
      initial={{ opacity: 0, x: -50 }} // Initial state (invisible and shifted left)
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 3 }}
    >
      {/* <div className={`container ${classes.Product15Main}`}> */}
      <div className={` ${classes.Product15Child}`}>
        <Image src={props.image} alt="" quality={100} width={400} />
      </div>
      <div className={` ${classes.Product15Parent}`}>
        <h6>{props.header} </h6>
        <h2>{props.subheader} </h2>
        <p> {props.body} </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body1}{" "}
        </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body2}{" "}
        </p>
        <p>
          {" "}
          <Image src={props.img} alt="" quality={100} width={20} />{" "}
          {props.body3}{" "}
        </p>
      </div>
      {/* </div> */}
    </motion.div>
  );
};

export default Product15;
