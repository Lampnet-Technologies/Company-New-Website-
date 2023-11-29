import React from "react";
import classes from "./About4.module.css";
import About4image from "../../../public/images/About4image.svg";
import Image from "next/image";

const About4 = () => {
  return (
    <div className={`container ${classes.About4Main}`}>
      <div className={classes.About4Parent}>
        <div className={classes.About4Image}>
          <Image src={About4image} alt="" quality={100} width={500} />
        </div>

        <div className={classes.About4Child}>
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
        </div>
      </div>
    </div>
  );
};

export default About4;
