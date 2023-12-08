"use client";

import React, { useEffect } from "react";
import classes from "./HomePage6.module.css";
import Image from "next/image";
import Choose from "../../../public/images/Choose.svg";
import Choose1 from "../../../public/images/Choose1.svg";
import Choose2 from "../../../public/images/Choose2.svg";
import Choose3 from "../../../public/images/Choose3.svg";
import Choose4 from "../../../public/images/Choose4.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage6 = () => {
  const containerControls = useAnimation();
  const itemControls = useAnimation();
  const rotateControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animateContainer = async () => {
    await containerControls.start({ opacity: 1, y: 0 });
    await itemControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }));
    await rotateControls.start({ rotate: 360, transition: { duration: 2 } });
  };

  useEffect(() => {
    if (inView) {
      animateContainer();
    }
  }, [inView, containerControls, itemControls, rotateControls]);
  return (
    <div className={`container ${classes.HomePage6Main}`} ref={ref}>
      {/* <div className={classes.HomePage6Parent}> */}
      <motion.div
        className={classes.HomePage6Parent}
        initial={{ opacity: 0, y: -50 }}
        animate={containerControls}
      >
        <h6>Why Choose Us</h6>
        <h2>We Have The Best Team of Development Experts</h2>
        <motion.div animate={rotateControls}>
          <Image
            src={Choose}
            alt=""
            quality={100}
            width={250}
            className="mt-5"
            height={250}
          />
        </motion.div>
        {/* <Image
          src={Choose}
          alt=""
          quality={100}
          width={250}
          className="mt-5"
          height={250}
        /> */}
        {/* </div> */}
      </motion.div>
      <motion.div
        className={classes.HomePage6Child}
        initial={{ opacity: 0, y: -50 }}
        animate={containerControls}
      >
        {data.map((d, index) => (
          <motion.div
            key={d.id}
            className={classes.HomePage6SubChild}
            initial={{ opacity: 0, y: -20 }}
            animate={itemControls}
            custom={index}
          >
            <div className={classes.HomePage6Image}>
              <Image src={d.image} alt={d.head} quality={100} width={50} />
            </div>
            <div className={classes.HomePage6Sister}>
              <h6> {d.head} </h6>
              <p>{d.body} </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage6;

const data = [
  {
    id: 1,
    head: "Clear Communication",
    body: "Our dedicated development team prioritizes your needs to ensure prompt query resolution and effective support for your business and branding  objectives.",
    image: Choose1,
  },
  {
    id: 2,
    head: "SaaS Development Framework",
    body: "With our affordable SaaS development framework and expert app development services, our diverse team members help revolutionize business of any size. ",
    image: Choose2,
  },
  {
    id: 3,
    head: "Secure and Scalable Products",
    body: "We develop scalable web apps using MVC to separate design, data and business logic for improved maintenance, reliability and efficiency.",
    image: Choose3,
  },
  {
    id: 4,
    head: "Customer Centric Approach",
    body: "At Lampnet Solutions, we employ a consultative approach to discover our clients' journeys and assist in reimagining their businesses for unparalleled success.",
    image: Choose4,
  },
];
