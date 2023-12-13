"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./Product3.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product3 = (props) => {
  const { header, subheader, paragraph, data, textColor } = props;

  const h6Style = {
    color: textColor,
    fontSize: "21px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.2px" /* 120% */,
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  const childControls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Animate the main container
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });

      // Animate each child with a stagger effect
      data.forEach((_, index) => {
        childControls.start({
          x: 0,
          opacity: 1,
          // transition: { duration: 0.5, delay: index * 0.5 },
        });
      });
    }
  }, [inView, controls, childControls, data]);

  return (
    <motion.div
      className={` ${classes.Product3GrandMain}`}
      ref={ref}
      animate={controls}
    >
      <div className={`container ${classes.Product3Main} `}>
        <div className={classes.Product3Parent}>
          <h6 style={h6Style}> {header} </h6>
          <h2> {subheader} </h2>
          <p> {paragraph} </p>
        </div>

        <div className={classes.Product3MainChild}>
          {data.map((d, index) => (
            <motion.div
              key={d.id}
              initial={{ x: -100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              animate={childControls}
              transition={{ delay: index * 1 }}
              className={classes.Product3Child}
            >
              <Image src={d.image} alt={d.title} quality={100} width={40} />

              <h6>{d.title} </h6>
              <p>{d.body} </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Product3;
