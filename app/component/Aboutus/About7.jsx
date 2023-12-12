"use client";
import React, { useEffect, useState } from "react";
import classes from "./About7.module.css";
import Approach1 from "../../../public/images/Approach1.svg";
import Approach2 from "../../../public/images/Approach2.svg";
import Approach3 from "../../../public/images/Approach3.svg";
import Approach4 from "../../../public/images/Approach4.svg";
import Approach5 from "../../../public/images/Approach5.svg";
import Approach6 from "../../../public/images/Approach6.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About7 = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the element is in the viewport
      const element = document.querySelector(`.${classes.About7Child}`);
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sisAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const animationOptions = {
    duration: 5,
  };

  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  // });

  // const sisAnimation = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: { opacity: 1, x: 0 },
  // };

  // const animationOptions = {
  //   duration: 2,
  // };

  return (
    <div className={` ${classes.About7Main}`}>
      <div className={`container ${classes.About7Parent}`}>
        <h6>Our Approach</h6>
        <h2>We believe in effective teamwork</h2>
        <p>
          Our African Technology company strives to provide top-tier IT
          solutions to businesses of all sizes and locations within the
          continent, utilizing African talent
        </p>
      </div>

      <div className={`container ${classes.About7MainChild}`}>
        <div className={classes.About7Child}>
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={sisAnimation}
            transition={animationOptions}
            className={classes.About7Sis}
          >
            <Image src={Approach1} alt="" quality={100} width={30} />
            <h6>Collaboration</h6>
            <p>
              We collaborate with our clients to thoroughly assess their unique
              business needs and goals before embarking on any project.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={sisAnimation}
            transition={animationOptions}
            className={classes.About7Sis}
          >
            <Image src={Approach2} alt="" quality={100} width={30} />
            <h6>Ensure Quality</h6>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={sisAnimation}
            transition={animationOptions}
            className={classes.About7Sis}
          >
            <Image src={Approach3} alt="" quality={100} width={30} />
            <h6>Continuously Improve</h6>
            <p>
              We are committed to continuous improvement to ensure that we
              provide cutting-edge solutions that exceed our clients'
              expectations.
            </p>
          </motion.div>
        </div>

        <div className={classes.About6Bro}>
          <Image src={Approach6} alt="" quality={100} />
        </div>

        <div className={classes.About6SubChild}>
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={sisAnimation}
            transition={animationOptions}
            className={classes.About7Sis1}
          >
            <Image src={Approach4} alt="" quality={100} width={30} />
            <h6>Ensure Quality</h6>
            <p>
              We have a robust quality assurance process to ensure that our
              solutions meet the highest standards.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={sisAnimation}
            transition={animationOptions}
            className={classes.About7Sis1}
          >
            <Image src={Approach5} alt="" quality={100} width={30} />
            <h6>Continuously Improve</h6>
            <p>
              We are committed to continuous improvement to ensure that we
              provide cutting-edge solutions that exceed our clients'
              expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About7;
