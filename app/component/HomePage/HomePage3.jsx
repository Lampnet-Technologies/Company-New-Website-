"use client";
import React, { useState, useEffect } from "react";
import classes from "./HomePage3.module.css";
import Homepage3image from "../../../public/images/NewHomepae3.png";
import Image from "next/image";
import ButtonTwo from "../Button/ButtonTwo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const HomePage3 = () => {
  const [learn, setLearn] = useState("Learn More");
  const containerControls = useAnimation();
  const itemControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animateContainer = async () => {
    await containerControls.start({ opacity: 1, y: 0 });
    await itemControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 2, staggerChildren: 0.2 },
    });
  };

  useEffect(() => {
    if (inView) {
      animateContainer();
    }
  }, [inView, containerControls, itemControls]);
  return (
    <div className={`container ${classes.HomePage3Main}`} ref={ref}>
      <div className={classes.HomePage3Parent}>
        <div className={classes.HomePage3ImageParent}>
          <Image src={Homepage3image} alt="" quality={100} width={500} />
        </div>
        <motion.div
          className={classes.HomePage3Child}
          initial={{ opacity: 0, y: -50 }}
          animate={containerControls}
        >
          <motion.h6 initial={{ opacity: 0, y: -20 }} animate={itemControls}>
            About us
          </motion.h6>
          <motion.h2 initial={{ opacity: 0, y: -20 }} animate={itemControls}>
            We are a one-stop technology solution provider for startups and
            businesses
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={itemControls}>
            LampNet Solutions is a remote-based agile IT Consulting & Mobile
            Technology Development company in West Africa, who are service
            providers of world-class solutions and mobile technologies for high
            business growth and transformation with vast experience in Mobile
            Application Development, Enterprise solutions, Security and Cloud
            based technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={itemControls}
            className={classes.Home3Link}
          >
            <Link href="/about">
              <ButtonTwo text={learn} />
            </Link>
          </motion.div>
        </motion.div>
        {/* <div className={classes.HomePage3Child}>
          <h6>About us</h6>
          <h2>
            We are a one-stop technology solution provider for startups and
            businesses{" "}
          </h2>
          <p>
            LampNet Solutions is a remote-based agile IT Consulting & Mobile
            Technology Development company in West Africa, who are service
            providers of world-class solutions and mobile technologies for high
            business growth and transformation with vast experience in Mobile
            Application Development, Enterprise solutions, Security and Cloud
            based technologies.{" "}
          </p>

          <ButtonTwo text={learn} />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage3;
