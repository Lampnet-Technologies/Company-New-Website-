"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./Service3Props.module.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service3Card = ({ id, image, header, button, body }) => {
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
      ref={ref}
      className={classes.Service3Bro}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
      transition={{ duration: 2, delay: id * 0.1 }}
    >
      {image && <Image src={image} alt={header} quality={100} width={40} />}
      {button && <button>{button}</button>}
      <h6>{header}</h6>
      <p>{body}</p>
    </motion.div>
  );
};

const Service3Props = ({ data, props, mail, paragraph1, textColor }) => {
  const h6Style = {
    color: textColor,
  };

  return (
    <div className={`${classes.Service3Main}`}>
      <div className={`container`}>
        <div className={classes.Service3Parent}>
          <h6 style={h6Style}> {mail} </h6>
          <h2> {props}</h2>
          <p> {paragraph1} </p>
        </div>
        <div className={classes.Service3Child}>
          {data.map((d) => (
            <Service3Card key={d.id} {...d} />
            // <div key={d.id} className={classes.Service3Bro}>
            //   {d.image && (
            //     <Image src={d.image} alt={d.header} quality={100} width={40} />
            //   )}
            //   {d.button && <button>{d.button} </button>}
            //   <h6>{d.header} </h6>
            //   <p>{d.body} </p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service3Props;
