"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./Service3Props.module.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// const Service3Card = ({ id, image, header, button, body }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       className={classes.Service3Bro}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: -100 },
//       }}
//       transition={{ duration: 2, delay: id * 0.1 }}
//     >
//       {image && <Image src={image} alt={header} quality={100} width={40} />}
//       {button && <button>{button}</button>}
//       <h6>{header}</h6>
//       <p>{body}</p>
//     </motion.div>
//   );
// };

const Service3Props = ({ data, props, mail, paragraph1, textColor }) => {
  const h6Style = {
    color: textColor,
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
    // <div className={`${classes.Service3Main}`}>
    <motion.div
      className={`${classes.Service3Main}`}
      ref={ref}
      animate={controls}
    >
      <div className={`container`}>
        <div className={classes.Service3Parent}>
          <h6 style={h6Style}> {mail} </h6>
          <h2> {props}</h2>
          <p> {paragraph1} </p>
        </div>
        <div className={classes.Service3Child}>
          {data.map((d, index) => (
            // <Service3Card key={d.id} {...d} />
            // <div key={d.id} className={classes.Service3Bro}>
            <motion.div
              key={d.id}
              initial={{ x: -100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              animate={childControls}
              transition={{ delay: index * 0.8 }}
              className={classes.Service3Bro}
            >
              {d.image && (
                <Image src={d.image} alt={d.header} quality={100} width={40} />
              )}
              {d.button && <button>{d.button} </button>}
              <h6>{d.header} </h6>
              <p>{d.body} </p>
            </motion.div>
            // </div>
          ))}
        </div>
      </div>
    </motion.div>
    // </div>
  );
};

export default Service3Props;
